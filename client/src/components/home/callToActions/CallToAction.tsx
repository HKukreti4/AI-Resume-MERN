export default function CallToAction() {
    return (
        <>
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
            import { CallToAction } from '@/components/home/callToActions/CallToAction';

                * {
                    font-family: 'Poppins', sans-serif;
                }
            `}</style>
            <div className="md:max-w-4/5 my-12 py-16 md:pl-20 md:w-full max-md:text-center mx-2 md:mx-auto flex flex-col md:flex-row items-center justify-between text-left bg-gradient-to-b from-[#4c008360] to-[#18004755] rounded-2xl p-10 text-white">
                <div>
                    <h1
                        className="text-2xl md:text-[46px] md:leading-[60px] font-semibold bg-gradient-to-r from-white to-[#CAABFF] text-transparent bg-clip-text">
                        Ready to try-out this app?
                    </h1>
                    <p className="bg-gradient-to-r from-white to-[#CAABFF] text-transparent bg-clip-text text-lg">
                        Your next favourite tool is just one click away.
                    </p>
                </div>
                <button className="md:px-12 px-6 py-3 text-slate-800 bg-white rounded-full text-sm mt-4">
                    Get Started
                </button>
            </div>
        </>
    );
};