
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

const About = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 animate-fade-in">
              About Us
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed animate-fade-in">
              With over a decade of experience, we are your trusted partner for 
              home appliance repair and premium product sales.
            </p>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="animate-fade-in">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  Founded in 2014, HomeAppliance started as a small repair service 
                  with a simple mission: to provide reliable, affordable appliance 
                  repair services to homeowners in our community.
                </p>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  Over the years, we've expanded our services to include premium 
                  appliance sales, while maintaining our commitment to quality 
                  and customer satisfaction.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Today, we're proud to have served over 5,000 satisfied customers 
                  and built lasting relationships based on trust and reliability.
                </p>
              </div>
              <div className="animate-fade-in">
                <img 
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop" 
                  alt="Our team at work"
                  className="rounded-lg shadow-lg w-full"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Values</h2>
              <p className="text-xl text-gray-600">
                The principles that guide everything we do
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Quality First",
                  description: "We never compromise on the quality of our work or the parts we use.",
                  icon: "⭐"
                },
                {
                  title: "Customer Focus",
                  description: "Your satisfaction is our priority. We listen and deliver solutions.",
                  icon: "🎯"
                },
                {
                  title: "Integrity",
                  description: "Honest pricing, transparent processes, and reliable service.",
                  icon: "🤝"
                }
              ].map((value, index) => (
                <div key={index} className="text-center animate-fade-in">
                  <div className="text-4xl mb-4">{value.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Team</h2>
              <p className="text-xl text-gray-600">
                Experienced professionals dedicated to your service
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { name: "Rajesh Kumar", role: "Lead Technician", experience: "12+ years" },
                { name: "Priya Sharma", role: "Customer Service Manager", experience: "8+ years" },
                { name: "Amit Patel", role: "Sales Specialist", experience: "6+ years" }
              ].map((member, index) => (
                <div key={index} className="bg-white rounded-lg p-6 shadow-lg text-center animate-fade-in">
                  <div className="w-20 h-20 bg-blue-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-2xl">👨‍💼</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                  <p className="text-blue-600 font-medium mb-2">{member.role}</p>
                  <p className="text-gray-600">{member.experience}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;
