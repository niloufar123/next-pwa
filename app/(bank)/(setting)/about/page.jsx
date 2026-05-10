

export default function About() {
    console.log("Page loaded");
    return (
        <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100">
            <div className="max-w-4xl mx-auto px-6 py-16">
                <h1 className="text-4xl font-bold text-slate-900 mb-8">About Us</h1>
                
                <section className="bg-white rounded-lg shadow-md p-8 mb-8">
                    <h2 className="text-2xl font-semibold text-slate-800 mb-4">Our Mission</h2>
                    <p className="text-slate-700 leading-relaxed">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        We are committed to delivering high-quality solutions.
                    </p>
                </section>

                <section className="bg-white rounded-lg shadow-md p-8">
                    <h2 className="text-2xl font-semibold text-slate-800 mb-4">Our Team</h2>
                    <p className="text-slate-700 leading-relaxed">
                        Our dedicated team brings years of experience and expertise 
                        to every project we undertake.
                    </p>
                </section>
            </div>
        </div>
    );
}