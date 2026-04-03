import { Link } from 'react-router-dom'
import { Circle, Calendar, MapPin, Clock } from 'lucide-react'
import rockwellLogo from '../img/rockwell-automation.png'
import siemensLogo from '../img/siemens.png'
import mitsubhishiLogo from '../img/Mitsubishi.png'
import schindlerLogo from '../img/schneider-electric.png'
import featureProject4 from '../img/featured-project-12.jpg'
import featureProject5 from '../img/featured-project-13.jpg'
import featureProject6 from '../img/featured-project-14.jpg'


export default function Projects() {
  return (
    <>
      {/* Page Header */}
      <section className="relative pt-32 pb-20 bg-slate-900 overflow-hidden">
        <div className="absolute inset-0 circuit-pattern opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/50 to-slate-900" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <h1 className="font-display text-5xl md:text-6xl font-bold mb-6 text-white">Our Projects</h1>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Revolutionising industries through innovative automation solutions. Explore our portfolio
              of successful implementations.
            </p>
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-16 bg-slate-950 border-b border-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-slate-500 mb-8 text-sm uppercase tracking-wider">
            Technologies We Harness
          </p>
          {/* <div className="flex flex-wrap justify-center gap-12 items-center opacity-70">
            {[
              { name: 'Rockwell Automation', hover: 'hover:text-orange-500' },
              { name: 'Siemens', hover: 'hover:text-cyan-500' },
              { name: 'Mitsubishi Electric', hover: 'hover:text-red-500' },
              { name: 'Schneider Electric', hover: 'hover:text-green-500' },
            ].map(({ name, hover }) => (
              <div
                key={name}
                className={`text-2xl font-bold text-slate-400 ${hover} transition-colors cursor-default`}
              >
                {name}
              </div>
            ))}
          </div> */}
           <div className="flex flex-wrap justify-center mt-8 gap-10 items-center opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
              {[
                { brand: 'Rockwell', src: rockwellLogo },
                { brand: 'Siemens', src: siemensLogo },
                { brand: 'Mitsubishi', src: mitsubhishiLogo },
                { brand: 'Schneider', src: schindlerLogo },
              ].map(({ brand, src }) => (
                <img
                  key={brand}
                  src={src}
                  alt={brand}
                  className="w-[190px] object-contain"
                />
              ))}
            </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-24 bg-slate-900 relative">
        <div className="absolute inset-0 circuit-pattern opacity-20" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

          {/* Project 1 */}
          <div className="mb-24">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl blur-3xl group-hover:blur-2xl transition-all" />
                <div className="relative bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden">
                  <img
                    src={featureProject4}
                    alt="Control Automation Project"
                    className="w-full h-80 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="flex gap-2 mb-3">
                      <span className="px-3 py-1 bg-primary/20 text-primary text-xs rounded-full border border-primary/30">PLC Programming</span>
                      <span className="px-3 py-1 bg-accent/20 text-accent text-xs rounded-full border border-accent/30">Control Systems</span>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-5xl font-bold text-slate-800">01</span>
                  <div className="h-px bg-slate-700 flex-1" />
                </div>
                <h2 className="font-display text-3xl md:text-4xl font-bold mb-6 text-white">
                  Control Automation Systems
                </h2>
                <p className="text-lg text-slate-400 mb-6 leading-relaxed">
                  Advanced PLC programming and control system integration for industrial manufacturing
                  processes. We delivered a complete automation solution that increased production
                  efficiency by 40% while reducing downtime.
                </p>

                <div className="grid sm:grid-cols-2 gap-4 mb-8">
                  <div className="bg-slate-950 border border-slate-800 rounded-xl p-4">
                    <div className="text-2xl font-bold text-primary mb-1">40%</div>
                    <div className="text-sm text-slate-500">Efficiency Increase</div>
                  </div>
                  <div className="bg-slate-950 border border-slate-800 rounded-xl p-4">
                    <div className="text-2xl font-bold text-accent mb-1">99.9%</div>
                    <div className="text-sm text-slate-500">Uptime Achieved</div>
                  </div>
                </div>

                <div className="space-y-3 mb-8">
                  {[
                    'Rockwell Automation ControlLogix PLC integration',
                    'FactoryTalk View SE HMI development',
                    'Complete I/O testing and commissioning',
                    'Operator training and documentation',
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-3 text-slate-300">
                      <Circle className="w-5 h-5 text-primary flex-shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                <div className="flex items-center gap-4 text-sm text-slate-500 mb-6">
                  <span className="flex items-center gap-1"><Calendar className="w-4 h-4" /> Completed: 2024</span>
                  <span className="flex items-center gap-1"><MapPin className="w-4 h-4" /> Location: UK</span>
                  <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> Duration: 6 months</span>
                </div>

                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-primary hover:bg-sky-600 text-white font-semibold rounded-lg transition-all duration-300"
                >
                  Similar Project? Contact Us 
                  
                  {/* <ArrowRight className="w-4 h-4" /> */}
                </Link>
              </div>
            </div>
          </div>

          {/* Project 2 */}
          <div className="mb-24">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-5xl font-bold text-slate-800">02</span>
                  <div className="h-px bg-slate-700 flex-1" />
                </div>
                <h2 className="font-display text-3xl md:text-4xl font-bold mb-6 text-white">
                  Motion Control Systems
                </h2>
                <p className="text-lg text-slate-400 mb-6 leading-relaxed">
                  Precision motion control system development and implementation for automated
                  manufacturing lines. This project involved servo motor integration, motion
                  profiling, and synchronized multi-axis control.
                </p>

                <div className="grid sm:grid-cols-2 gap-4 mb-8">
                  <div className="bg-slate-950 border border-slate-800 rounded-xl p-4">
                    <div className="text-2xl font-bold text-accent mb-1">±0.01mm</div>
                    <div className="text-sm text-slate-500">Positioning Accuracy</div>
                  </div>
                  <div className="bg-slate-950 border border-slate-800 rounded-xl p-4">
                    <div className="text-2xl font-bold text-purple-400 mb-1">8 Axis</div>
                    <div className="text-sm text-slate-500">Synchronized Control</div>
                  </div>
                </div>

                <div className="space-y-3 mb-8">
                  {[
                    'Siemens S7-1500T Motion Controller',
                    'SINAMICS S120 servo drive configuration',
                    'Camming and gearing applications',
                    'Safety integrated functionality',
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-3 text-slate-300">
                      <Circle className="w-5 h-5 text-accent flex-shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                <div className="flex items-center gap-4 text-sm text-slate-500 mb-6">
                  <span className="flex items-center gap-1"><Calendar className="w-4 h-4" /> Completed: 2024</span>
                  <span className="flex items-center gap-1"><MapPin className="w-4 h-4" /> Location: UK</span>
                  <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> Duration: 4 months</span>
                </div>

                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-accent hover:bg-cyan-600 text-white font-semibold rounded-lg transition-all duration-300"
                >
                  Discuss Motion Control 
                  {/* <ArrowRight className="w-4 h-4" /> */}
                </Link>
              </div>

              <div className="relative group order-1 lg:order-2">
                <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-purple-500/20 rounded-3xl blur-3xl group-hover:blur-2xl transition-all" />
                <div className="relative bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden">
                  <img
                    src={featureProject5}
                    alt="Motion Control Project"
                    className="w-full h-80 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="flex gap-2 mb-3">
                      <span className="px-3 py-1 bg-accent/20 text-accent text-xs rounded-full border border-accent/30">Motion Control</span>
                      <span className="px-3 py-1 bg-purple-500/20 text-purple-400 text-xs rounded-full border border-purple-500/30">Servo Systems</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Project 3 */}
          <div>
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 to-accent/20 rounded-3xl blur-3xl group-hover:blur-2xl transition-all" />
                <div className="relative bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden">
                  <img
                    src={featureProject6}
                    alt="SCADA Project"
                    className="w-full h-80 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="flex gap-2 mb-3">
                      <span className="px-3 py-1 bg-green-500/20 text-green-400 text-xs rounded-full border border-green-500/30">SCADA</span>
                      <span className="px-3 py-1 bg-accent/20 text-accent text-xs rounded-full border border-accent/30">Substation</span>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-5xl font-bold text-slate-800">03</span>
                  <div className="h-px bg-slate-700 flex-1" />
                </div>
                <h2 className="font-display text-3xl md:text-4xl font-bold mb-6 text-white">
                  Substation SCADA Implementation
                </h2>
                <p className="text-lg text-slate-400 mb-6 leading-relaxed">
                  Complete SCADA system design and implementation for electrical substation monitoring
                  and control. Real-time data acquisition, alarm management, and remote control
                  capabilities across multiple sites.
                </p>

                <div className="grid sm:grid-cols-2 gap-4 mb-8">
                  <div className="bg-slate-950 border border-slate-800 rounded-xl p-4">
                    <div className="text-2xl font-bold text-green-400 mb-1">15 Sites</div>
                    <div className="text-sm text-slate-500">Monitored</div>
                  </div>
                  <div className="bg-slate-950 border border-slate-800 rounded-xl p-4">
                    <div className="text-2xl font-bold text-accent mb-1">&lt;100ms</div>
                    <div className="text-sm text-slate-500">Response Time</div>
                  </div>
                </div>

                <div className="space-y-3 mb-8">
                  {[
                    'IEC 61850 protocol implementation',
                    'Wonderware System Platform SCADA',
                    'Redundant communication networks',
                    'Historical data logging and trending',
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-3 text-slate-300">
                      <Circle className="w-5 h-5 text-green-400 flex-shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                <div className="flex items-center gap-4 text-sm text-slate-500 mb-6">
                  <span className="flex items-center gap-1"><Calendar className="w-4 h-4" /> Completed: 2023</span>
                  <span className="flex items-center gap-1"><MapPin className="w-4 h-4" /> Location: UK</span>
                  <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> Duration: 12 months</span>
                </div>

                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-lg transition-all duration-300"
                >
                  Start Your SCADA Project 
                  {/* <ArrowRight className="w-4 h-4" /> */}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Stats */}
      <section className="py-24 bg-slate-950 border-t border-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              { value: '150+', color: 'text-primary', label: 'Projects Completed' },
              { value: '98%', color: 'text-accent', label: 'Client Satisfaction' },
              { value: '10+', color: 'text-purple-400', label: 'Years Experience' },
              { value: '24/7', color: 'text-green-400', label: 'Support Available' },
            ].map(({ value, color, label }) => (
              <div key={label} className="p-6">
                <div className={`text-5xl font-bold ${color} mb-2`}>{value}</div>
                <div className="text-slate-400">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 circuit-pattern opacity-20" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="font-display text-4xl font-bold mb-6 text-white">Have a Project in Mind?</h2>
          <p className="text-lg text-slate-400 mb-8">
            Let's discuss how Tays Automation can help transform your operations with our bespoke
            automation solutions.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary hover:bg-sky-600 text-white font-semibold rounded-lg transition-all duration-300 shadow-lg shadow-primary/25"
          >
            Start Your Project 
            {/* <ArrowRight className="w-5 h-5" /> */}
          </Link>
        </div>
      </section>
    </>
  )
}
