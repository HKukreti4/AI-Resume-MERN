export default function AboutSection() {
    return (
        <>
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
            
                * {
                    font-family: 'Poppins', sans-serif;
                }
            `}</style>
            <h1 className="text-3xl font-semibold text-center mx-auto mt-16">About our apps</h1>
            <p className="text-sm text-slate-500 text-center mt-2 max-w-md mx-auto">
                A visual collection of our resume - each template crafted with intention, emotion and style.
            </p>
            <div className="max-w-4/5 mx-auto mb-16 flex flex-col md:flex-row items-center justify-between gap-8 px-4 md:px-0 py-10">
                <div className="size-[520px] rounded-full absolute blur-[300px] -z-10 "></div>
                <img className=" w-150 rounded-xl h-100 object-cover"
                    src="https://images.unsplash.com/photo-1555212697-194d092e3b8f?q=80&w=830&h=844&auto=format&fit=crop"
                    alt="" />
                <div className="flex-2 w-full">
                    <h1 className="text-3xl font-semibold">Our Latest features</h1>
                    <p className="text-sm text-slate-500 mt-2">
                        Ship Beautiful Resume Without the Overhead — Customizable, ATS Friendly and job ready.
                    </p>
            
                    <div className="flex flex-col gap-10 mt-6">
                        <div className="flex items-center gap-4">
                            <div className="size-9 p-2 bg-indigo-50 border border-indigo-200 rounded">
                                <img src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/aboutSection/flashEmoji.png" alt="" />
                            </div>
                            <div>
                                <h3 className="text-base font-medium text-slate-400">Lightning-Fast Performance</h3>
                                <p className="text-sm text-slate-500">Built with speed — minimal load times and optimized.</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="size-9 p-2 bg-indigo-50 border border-indigo-200 rounded">
                                <img src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/aboutSection/colorsEmoji.png" alt="" />
                            </div>
                            <div>
                                <h3 className="text-base font-medium text-slate-400">Beautifully Designed Templates</h3>
                                <p className="text-sm text-slate-500">Modern, pixel-perfect resumes ready for any job.</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="size-9 p-2 bg-indigo-50 border border-indigo-200 rounded">
                                <img src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/aboutSection/puzzelEmoji.png" alt="" />
                            </div>
                            <div>
                                <h3 className="text-base font-medium text-slate-400">Choose among multiple templates</h3>
                                <p className="text-sm text-slate-500">Simply choose preferred template and start resume building</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};