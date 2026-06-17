 <section id="pricing" className="py-28 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold">Transparent Pricing</h2>
            <p className="text-xl text-gray-600 mt-4">Choose the perfect package for your needs</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PRICING.map((plan, index) => (
              <div
                key={index}
                className={`bg-white rounded-3xl p-10 border ${index === 2 ? "border-indigo-600 ring-1 ring-indigo-600" : "border-gray-100"} relative`}
              >
                {index === 2 && (
                  <div className="absolute -top-3 right-6 bg-indigo-600 text-white text-xs font-medium px-4 py-1 rounded-full">
                    MOST POPULAR
                  </div>
                )}

                <h3 className="text-2xl font-semibold mb-2">{plan.name}</h3>
                <div className="flex items-baseline gap-2 mb-8">
                  <span className="text-5xl font-bold">{plan.price}</span>
                  {plan.price !== "Custom" && <span className="text-gray-500">one-time</span>}
                </div>

                <ul className="space-y-4 mb-10">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-emerald-500" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="#contact"
                  className="block text-center py-4 rounded-2xl font-semibold border border-gray-900 hover:bg-gray-900 hover:text-white transition"
                >
                  Get Started
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>