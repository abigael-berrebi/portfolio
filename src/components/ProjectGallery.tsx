import React from 'react';
import { projects } from '../data/projects';
import { ArrowUpRight, MapPin } from 'lucide-react';

export default function ProjectGallery() {
  return (
    <section className="bg-white py-24 px-4 md:px-12">
        
        <div className="max-w-7xl mx-auto mb-20 border-b border-black pb-4 flex justify-between items-end">
            <h2 className="text-5xl md:text-7xl font-thin tracking-tighter">SÉLECTION</h2>
            <span className="font-mono text-sm">[ 2023 — 2025 ]</span>
        </div>

        <div className="max-w-7xl mx-auto flex flex-col gap-32">
            {projects.map((project, index) => (
                <div 
                    key={project.id} 
                    className="block"
                >
                    <div className={`flex flex-col md:flex-row gap-8 md:gap-16 items-start ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                        
                        <a href={`/arch-portfolio/project/${project.id}`} className="w-full md:w-3/5 overflow-hidden relative aspect-[16/9] group cursor-pointer">
                            <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500 z-10"/>
                            
                            <img 
                                src={project.image} 
                                alt={project.title}
                                className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
                                onError={(e) => { e.currentTarget.src = "https://placehold.co/1200x800/e5e5e5/333?text=VISUEL+ARCHI"; }}
                            />
                            
                            <div className="absolute top-4 right-4 bg-white/90 px-3 py-1 text-xs font-bold font-mono z-20 text-black">
                                {project.year}
                            </div>
                        </a>

                        <div className="w-full md:w-2/5 flex flex-col justify-between h-full pt-4">
                            <div>
                                <span className="font-mono text-xs text-gray-400 mb-4 block">
                                    {(index + 1).toString().padStart(2, '0')} / {projects.length.toString().padStart(2, '0')}
                                </span>

                                <h3 className="text-3xl md:text-4xl font-normal leading-tight mb-4 text-black">
                                    {project.title}
                                </h3>

                                <div className="flex flex-col gap-2 text-sm text-gray-500 font-mono mb-8">
                                    <span className="uppercase tracking-widest text-black">{project.category}</span>
                                    <span className="flex items-center gap-2"><MapPin size={14}/> {project.location}</span>
                                </div>

                                <p className="text-gray-600 font-sans text-sm leading-relaxed max-w-sm line-clamp-3">
                                    {project.description}
                                </p>
                            </div>

                            <a 
                                href={`/arch-portfolio/project/${project.id}`}
                                className="mt-8 flex items-center gap-2 text-sm font-bold uppercase tracking-widest hover:translate-x-4 transition-transform duration-300 w-max cursor-pointer text-black hover:text-gray-600"
                            >
                                Voir le projet <ArrowUpRight size={18} />
                            </a>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </section>
  );
}