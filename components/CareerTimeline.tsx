"use client";
import { useState, useEffect, useRef, useLayoutEffect } from 'react';

// --- DATA ---
const professionalJourneyData = [
    {
        type: 'internship',
        institution: 'PT Teknologi Nirmala Olah Daya Informasi',
        location: 'Bandung, Jawa barat',
        duration: 'Agu 2025 - Saat Ini',
        roles: [
            {
                title: 'Full-Stack Developer',
                duration: '2 bulan',
                description: "Sebagai Intern Fullstack Developer, saya saat ini berfokus pada spesialisasi front-end untuk aplikasi web modern. Tanggung jawab utama saya adalah menerjemahkan desain UI/UX menjadi kode yang fungsional, bersih, dan piksel-presisi. Dengan menggunakan stack teknologi seperti Next.js, TypeScript (TSX), dan Tailwind CSS, saya membangun komponen antarmuka yang tidak hanya interaktif tetapi juga sangat responsif, dengan perhatian khusus pada pengalaman pengguna di tampilan mobile.",
                skills: ['Web Development', 'Web Design', 'Responsive Web Design', 'Front-End Development']
            },
        ]
    },
    {
        type: 'organization',
        institution: 'HIMA Diploma D3 Sistem Informasi',
        location: 'Telkom University Bandung, Jawa Barat',
        duration: 'Jun 2024 - Saat Ini',
        roles: [
            {
                title: 'Head of Department of Internal Affairs',
                duration: 'Feb 2025 - Saat Ini',
                description: "• Developed and implemented the department's annual work program, including regular meetings such as coordination and evaluation sessions, to ensure smooth operations and achievement of organizational goals.<br /> • Organized training and skill enhancement sessions for internal management, as well as provided coaching and motivation to improve team performance and solidarity.<br /> • Conducted regular evaluations of work programs and staff performance, and designed improvement strategies to enhance the department's effectiveness and efficiency.",
                skills: ['Time Management', 'Team Management', 'Event Planning', 'Leadership']
            },
            {
                title: 'Chief Executive - Farewell Party',
                duration: 'Nov 2024 - Des 2024',
                description: "• Developed the concept for a farewell party, including venue selection, decoration, and event schedule, to create a warm and memorable atmosphere.<br /> • Prepared and managed an event, covering catering, decorations, award certificates, and documentation. Coordinated with vendors to ensure smooth delivery of goods and services during the event.<br /> • Led a team of 21 members throughout the event process, from preparation to post-event evaluation. Conducted regular briefings to ensure each division understood their tasks and responsibilities.",
                skills: ['Time Management', 'Team Management', 'Event Planning', 'Leadership']
            },
            {
                title: 'Head of Logistics Division - GROOVY',
                duration: 'Agu 2024 - Nov 2024',
                description: "• Developed and planned the logistical requirements for the Groovy Dies Natalis event, celebrating the anniversary of the D3 Information Systems Study Program, which included activities such as a fashion show, awards ceremony, and music concert.<br /> • Coordinated the procurement and distribution of event equipment, including sound systems, lighting, stage decorations, and other supplies, to ensure all equipment was ready and functioning properly on the event day.<br /> • Addressed logistical issues that arose on the event day, such as delivery delays or equipment malfunctions, and promptly implemented solutions to ensure the event proceeded smoothly without disruptions.",
                skills: ['Time Management', 'Team Management', 'Event Planning', 'Leadership']
            },
            {
                title: 'Event Division Staff - OASIS',
                duration: 'Feb 2025 - Saat Ini',
                description: "• Assisted the team in planning and executing the Oasis event, an orientation program for new students aimed at introducing them to the academic environment and organizational structure.<br /> • Coordinated technical preparations, including audiovisual equipment, to ensure the smooth execution of each event segment.<br /> • Actively participated in evaluating the event's success by conducting debriefing sessions with the team to identify areas for improvement and preparing a comprehensive activity report for relevant stakeholders.",
                skills: ['Time Management']
            },
            {
                title: 'Head of Public Relations Division - Welcoming Party',
                duration: 'Jun 2024 - Sep 2024',
                description: "• Fostered and maintained effective communication between divisions within the organization to enhance coordination and collaboration among teams.<br /> • Managed communication channels between internal management and organization members, as well as between the organization and external parties, to ensure accurate and effective information dissemination.",
                skills: ['Time Management', 'Team Management', 'Event Planning', 'Leadership']
            },
            {
                title: 'Departement Home Affairs Staff',
                duration: 'Mei 2024 - Nov 2024',
                description: "• Fostered and maintained effective communication between divisions within the organization to enhance coordination and collaboration among teams.<br /> • Managed communication channels between internal management and organization members, as well as between the organization and external parties, to ensure accurate and effective information dissemination.",
                skills: ['Time Management']
            },
        ]
    },
    {
        type: 'work',
        institution: 'Fakultas Ilmu Terapan',
        location: 'Telkom Univeristy Bandung, Jawa Barat',
        duration: 'Mar 2025 - Mei 2025',
        roles: [
            {
                title: 'UI/UX Practicum Assistant',
                duration: 'Mar 2025 - Mei 2025',
                description: "Providing guidance and direction to students in effectively understanding and applying User Experience (UX) principles in user interface design projects, ensuring they can optimally integrate theory with practice. Additionally, offering technical support throughout the prototype development process, encompassing design, implementation, and testing phases, to assist students in evaluating and enhancing the overall user experience.",
                skills: ['Web Design', 'User Experience Design (UED)', 'User Interface Design', 'Figma', 'Web Development']
            },
            {
                title: 'Web Programming Practicum Assistant',
                duration: 'Mar 2025 - Mei 2025',
                description: "Providing both technical and academic guidance to students in understanding and implementing fundamental and advanced concepts in web programming, including the development of responsive and interactive web-based applications. Additionally, offering practical support throughout the processes of creation, testing, and evaluation of web applications to ensure that the developed applications not only meet technical standards but also optimize user experience.",
                skills: ['Web Development']
            }
        ]
    },
];

// --- STYLING UNTUK TIPE ---
const LABEL_STYLES = 'bg-[#DEE9FF] text-[#0253EE]'; // Ubah warna di sini untuk semua label

const typeLabels: { [key: string]: string } = {
    internship: 'INTERNSHIP',
    organization: 'ORGANIZATION',
    work: 'WORK',
};

// --- KOMPONEN NODE ---
const TimelineNode = ({ data, side, nodeRef, showMobileDot }: { data: any, side: 'left' | 'right', nodeRef: (el: HTMLHeadingElement | null) => void, showMobileDot?: boolean }) => {
    const isLeft = side === 'left';
    const contentAlignment = isLeft ? 'lg:text-right' : 'lg:text-left';
    const typeLabel = typeLabels[data.type] || data.type.charAt(0).toUpperCase() + data.type.slice(1);

    return (
        <div className="relative w-full mb-8 lg:mb-12">
            {/* Dot Penanda Mobile - Positioned relative to this card */}
            {showMobileDot && (
                <div className="absolute left-[-34px] top-[66px] lg:hidden">
                    <div className="h-5 w-5 rounded-full bg-slate-300 border-4 border-white shadow-md dot-marker" />
                </div>
            )}
            
            <div className={`p-6 bg-slate-50 rounded-xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow duration-300 ${contentAlignment}`}>
                {/* Type Label */}
                <div className={`mb-3`}>
                    <span className={`inline-block px-3 py-1 text-xs font-semibold rounded-sm ${LABEL_STYLES}`}>
                        {typeLabel}
                    </span>
                </div>

                {/* Header Institusi */}
                <div className="mb-4">
                    <h3 ref={nodeRef} className="text-xl font-bold text-[#0253EE] mb-1">{data.institution}</h3>
                    <p className="text-base text-gray-500">{data.location}</p>
                    <p className="text-sm font-medium text-gray-400 mt-1">{data.duration}</p>
                </div>

                <div className={`relative pt-2 border-slate-200/80 border-l-2 lg:border-l-0`}>
                    <div className={`hidden lg:block absolute top-0 bottom-0 ${isLeft ? 'right-[-2.8]' : 'left-[-2.8]'} w-1 bg-slate-200/80 rounded-full`} />

                    {data.roles.map((role: any, roleIndex: number) => (
                        <div key={roleIndex} className={`mb-4 last:mb-0 relative ${isLeft ? 'lg:pr-8 lg:pl-0' : 'lg:pl-8'} pl-8`}>
                            
                            <div className={`absolute top-1.5 w-3 h-3 rounded-full bg-slate-300 ${
                                isLeft ? 'lg:left-auto lg:right-[-6.9]' : 'lg:-left-[7px]'
                            } -left-[7px]`}></div>

                            <h4 className="font-semibold text-gray-800 text-lg">{role.title}</h4>
                            <p className="text-xs text-gray-500 mb-2 font-mono">{role.duration}</p>
                            <p className="text-sm text-gray-700 leading-relaxed mb-3" dangerouslySetInnerHTML={{ __html: role.description }}></p>
                            {role.skills && (
                                <p className="text-xs font-medium text-[#0253EE]">
                                    <span className="font-bold">Keahlian:</span> {role.skills.join(' • ')}
                                </p>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};


// --- KOMPONEN UTAMA TIMELINE ---
const CareerTimeline = () => {
    const [timelineHeight, setTimelineHeight] = useState('0%');
    const timelineRef = useRef<HTMLDivElement>(null);
    const nodeRefs = useRef<(HTMLHeadingElement | null)[]>([]);
    const [nodeTops, setNodeTops] = useState<number[]>([]);

    const leftColumnItems = professionalJourneyData.filter((_, index) => index % 2 === 0);
    const rightColumnItems = professionalJourneyData.filter((_, index) => index % 2 !== 0);

    const computePositions = () => {
        if (!timelineRef.current) return;
        
        const timelineRect = timelineRef.current.getBoundingClientRect();
        const timelineScrollTop = timelineRef.current.scrollTop || 0;
        
        const tops = nodeRefs.current.map((el) => {
            if (!el) return 0;
            const elRect = el.getBoundingClientRect();
            // Menghitung posisi relatif terhadap timeline container dengan offset yang lebih akurat
            return elRect.top - timelineRect.top + timelineScrollTop + (elRect.height / 2);
        });
        setNodeTops(tops);
    };

    // Update warna dot mobile berdasarkan scroll
    useEffect(() => {
        if (typeof window === 'undefined') return;
        
        const updateMobileDotColors = () => {
            if (!timelineRef.current) return;
            
            const timelineTotalHeight = timelineRef.current.offsetHeight;
            const currentAnimatedHeight = (parseFloat(timelineHeight) / 100) * timelineTotalHeight;
            
            // Update semua dot marker di mobile
            const dotMarkers = document.querySelectorAll('.dot-marker');
            
            // Iterasi melalui semua dot marker
            dotMarkers.forEach((dotElement, idx) => {
                const htmlDotElement = dotElement as HTMLElement;
                
                // Dapatkan posisi dot relatif terhadap timeline container
                let element = htmlDotElement;
                let offsetTop = 0;
                
                // Hitung offset top dari dot hingga timeline container
                while (element && element !== timelineRef.current) {
                    offsetTop += element.offsetTop;
                    element = element.offsetParent as HTMLElement;
                }
                
                // Cek apakah posisi dot sudah dilewati oleh garis biru
                if (offsetTop <= currentAnimatedHeight) {
                    htmlDotElement.classList.remove('bg-slate-300');
                    htmlDotElement.classList.add('bg-[#0253EE]');
                } else {
                    htmlDotElement.classList.remove('bg-[#0253EE]');
                    htmlDotElement.classList.add('bg-slate-300');
                }
            });
        };
        
        updateMobileDotColors();
    }, [timelineHeight]);


    
    useLayoutEffect(() => {
        // Delay untuk memastikan semua elemen sudah di-render sempurna
        const timer = setTimeout(() => {
            computePositions();
        }, 50);
        
        const handleResize = () => {
            setTimeout(() => {
                computePositions();
            }, 50);
        };
        
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
            clearTimeout(timer);
        };
    }, []);

    useEffect(() => {
        let rafId: number | null = null;
        
        const handleScroll = () => {
            // Batalkan animasi frame sebelumnya jika ada
            if (rafId !== null) {
                cancelAnimationFrame(rafId);
            }
            
            // Gunakan requestAnimationFrame untuk smooth animation
            rafId = requestAnimationFrame(() => {
                if (timelineRef.current) {
                    const { top, height } = timelineRef.current.getBoundingClientRect();
                    const scrollAmount = window.innerHeight / 2 - top;
                    const percentage = (scrollAmount / height) * 100;
                    const clampedPercentage = Math.max(0, Math.min(100, percentage));
                    setTimelineHeight(`${clampedPercentage}%`);
                }
            });
        };

        // Gunakan passive listener untuk performa lebih baik
        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll();

        // Menjalankan ulang kalkulasi posisi setelah delay untuk memastikan
        // semua elemen DOM sudah stabil dan layout selesai
        const positionTimer = setTimeout(() => {
            computePositions();
            // Trigger update warna dot setelah posisi dihitung
            const updateTimer = setTimeout(() => {
                const event = new Event('scroll');
                window.dispatchEvent(event);
            }, 100);
            return () => clearTimeout(updateTimer);
        }, 200);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            if (rafId !== null) {
                cancelAnimationFrame(rafId);
            }
            clearTimeout(positionTimer);
        };
    }, []);

    // Update posisi dots saat nodeTops berubah
    useEffect(() => {
        if (nodeTops.length > 0) {
            // Force re-render untuk memastikan dots terposisi dengan benar
            const timer = setTimeout(() => {
                computePositions();
            }, 100);
            return () => clearTimeout(timer);
        }
    }, [nodeTops]);

    // Intersection Observer untuk memantau perubahan posisi elemen
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                // Ketika ada elemen yang berubah visibility, update posisi
                if (entries.some(entry => entry.isIntersecting)) {
                    setTimeout(computePositions, 50);
                }
            },
            { threshold: [0, 0.1, 0.5, 1], rootMargin: '50px' }
        );

        nodeRefs.current.forEach(node => {
            if (node) observer.observe(node);
        });

        return () => observer.disconnect();
    }, []);

    // Function untuk menghitung posisi dot mobile
    const getMobileDotPosition = (idx: number) => {
        const nodeRef = nodeRefs.current[idx];
        if (!nodeRef || !timelineRef.current) return 0;
        
        const timelineRect = timelineRef.current.getBoundingClientRect();
        const nodeRect = nodeRef.getBoundingClientRect();
        const timelineScrollTop = timelineRef.current.scrollTop || 0;
        
        // Menghitung posisi relatif dengan scroll offset
        return nodeRect.top - timelineRect.top + timelineScrollTop + (nodeRect.height / 2);
    };

    return (
        <div className="relative w-full bg-white pt-8 pb-0 lg:pt-16 md:pb-0">
            <div className="container mx-auto px-8 lg:px-8">

                <div ref={timelineRef} className="relative">
                    {/* Garis Timeline Utama & Animasi Pengisi */}
                    <div className="absolute left-0 lg:left-1/2 -translate-x-1/2 w-1 bg-slate-200 h-full rounded-full"></div>
                    <div
                        className="absolute top-0 left-0 lg:left-1/2 -translate-x-1/2 w-1 bg-[#0253EE] rounded-full"
                        style={{ height: timelineHeight }}
                    ></div>
                    
                    {/* Layout Mobile */}
                    <div className="lg:hidden">
                        {professionalJourneyData.map((item, i) => (
                             <div className="pl-6" key={`${item.institution}-${i}`}>
                                 <TimelineNode data={item} side="right" nodeRef={(el) => (nodeRefs.current[i] = el)} showMobileDot={true} />
                             </div>
                        ))}
                    </div>

                    {/* Layout Desktop (2 Kolom) */}
                    <div className="hidden lg:flex justify-center">
                        <div className="w-1/2 pr-8">
                            {leftColumnItems.map((item, i) => (
                                <TimelineNode key={`${item.institution}-${i}`} data={item} side="left" nodeRef={(el) => (nodeRefs.current[i * 2] = el)} />
                            ))}
                        </div>
                        <div className="w-1/2 pl-8">
                            {rightColumnItems.map((item, i) => (
                                <TimelineNode key={`${item.institution}-${i}`} data={item} side="right" nodeRef={(el) => (nodeRefs.current[i * 2 + 1] = el)} />
                            ))}
                        </div>
                    </div>

                    {/* Render Dots Besar - Desktop */}
                    <div className="hidden lg:block">
                        {professionalJourneyData.map((_, idx) => {
                            const nodeRef = nodeRefs.current[idx];
                            if (!nodeRef || !timelineRef.current) return null;
                            
                            // Kalkulasi posisi yang lebih akurat
                            const timelineRect = timelineRef.current.getBoundingClientRect();
                            const nodeRect = nodeRef.getBoundingClientRect();
                            const relativeTop = nodeRect.top - timelineRect.top + nodeRect.height / 2;
                            
                            const timelineTotalHeight = timelineRef.current.offsetHeight;
                            const currentAnimatedHeight = (parseFloat(timelineHeight) / 100) * timelineTotalHeight;
                            const isDotActive = relativeTop > 0 && relativeTop <= currentAnimatedHeight;
                            const dotColorClass = isDotActive ? 'bg-[#0253EE]' : 'bg-slate-300';
                            
                            return (
                                <div
                                    key={`dot-${idx}`}
                                    className={`absolute left-1/2 -translate-x-1/2 -translate-y-1/2 h-5 w-5 rounded-full ${dotColorClass} border-4 border-white shadow-md z-10`}
                                    style={{ top: `${relativeTop}px` }}
                                />
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CareerTimeline;