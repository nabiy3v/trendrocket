import { useState } from 'react';

export default function Pricing() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [errors, setErrors] = useState({ name: '', surname: '' });

  const openModal = () => {
    setIsModalOpen(true);
    setErrors({ name: '', surname: '' }); // Modal ochilganda errorlarni tozalash
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setErrors({ name: '', surname: '' }); // Modal yopilganda errorlarni tozalash
  };

  // Validation funksiyasi
  const validateForm = (name: string, surname: string) => {
    const newErrors = { name: '', surname: '' };
    let isValid = true;

    // Name validation
    if (name.length < 3) {
      newErrors.name = 'Name must be at least 3 characters long';
      isValid = false;
    } else if (/\d/.test(name)) {
      newErrors.name = 'Name cannot contain numbers';
      isValid = false;
    }

    // Surname validation
    if (surname.length < 3) {
      newErrors.surname = 'Surname must be at least 3 characters long';
      isValid = false;
    } else if (/\d/.test(surname)) {
      newErrors.surname = 'Surname cannot contain numbers';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    const form = e.currentTarget;
    const name = (form.elements.namedItem('name') as HTMLInputElement).value;
    const surname = (form.elements.namedItem('surname') as HTMLInputElement).value;
    const description = (form.elements.namedItem('description') as HTMLInputElement).value;

    // Formani validatsiya qilish
    if (!validateForm(name, surname)) {
      return; // Agar validatsiya o'tmasa, request yuborilmaydi
    }

    try {
      const res = await fetch("https://backend-trendrocket-7kmr.onrender.com/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, surname, description })
      });

      const data = await res.json();

      if (data.ok) {
        alert("Xabar Telegramga yuborildi!");
        closeModal();
        form.reset(); // Formani tozalash
      } else {
        alert("Xatolik yuz berdi!");
      }
    } catch (error) {
      console.error("Request error:", error);
      alert("Serverga ulanishda xatolik!");
    }
  };
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    
    if (name === 'name' || name === 'surname') {
      const newErrors = { ...errors };
      
      if (value.length > 0 && value.length < 3) {
        newErrors[name as keyof typeof errors] = `${name === 'name' ? 'Name' : 'Surname'} must be at least 3 characters long`;
      } else if (/\d/.test(value)) {
        newErrors[name as keyof typeof errors] = `${name === 'name' ? 'Name' : 'Surname'} cannot contain numbers`;
      } else {
        newErrors[name as keyof typeof errors] = '';
      }
      
      setErrors(newErrors);
    }
  };

  return (
    <>
      <section id="pricing" className="w-full bg-[#0f0f11] text-white py-16 px-4 mt-[50px]">
        {/* ... existing pricing content ... */}
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-semibold">
              Pricing for any business
            </h1>
          </div>

          <div className="grid grid-cols-1 items-start md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-[#141418] border border-white/10 rounded-2xl p-8 hover:border-purple-400/40 transition">
              <div className="mb-6">
                <h3 className="text-2xl font-semibold mb-2">Basic</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Pricing for every stage because of those wanting to load the wallet.
                </p>
              </div>

              <div className="mb-6">
                <div className="flex items-baseline gap-1">
                  <span className="text-7xl font-medium">$49</span>
                  <span className="text-gray-400">per month</span>
                </div>
              </div>

              <button 
                onClick={openModal}
                className="w-full border-purple-500 border-2 cursor-pointer text-white font-semibold py-3 px-6 rounded-full transition duration-200 mb-8 hover:bg-purple-500/10"
              >
                Start Your Free Trial
              </button>

              <ul className="space-y-3">
                <li className="flex items-center gap-3 border-b-[0.5px] pb-3 border-[#2E2E2E] text-sm text-gray-300">
                  <img src="/assets/check-circle.svg" alt="" />
                  Buyed Search
                </li>
                <li className="flex items-center gap-3 border-b-[0.5px] pb-3 border-[#2E2E2E] text-sm text-gray-300">
                  <img src="/assets/check-circle.svg" alt="" />
                  SLA/Off+ Execute its updates
                </li>
                <li className="flex items-center gap-3 border-b-[0.5px] pb-3 border-[#2E2E2E] text-sm text-gray-300">
                  <img src="/assets/check-circle.svg" alt="" />
                  Overview and review teacher
                </li>
                <li className="flex items-center gap-3 border-b-[0.5px] pb-3 border-[#2E2E2E] text-sm text-gray-300">
                  <img src="/assets/check-circle.svg" alt="" />
                  Social and community performance
                </li>
                <li className="flex items-center gap-3 border-b-[0.5px] pb-3 border-[#2E2E2E] text-sm text-gray-300">
                  <img src="/assets/check-circle.svg" alt="" />
                  Access more than US$5,000 ($2.0%)
                </li>
              </ul>
            </div>

            <div className="bg-[#0E0C15] rounded-2xl p-8 transition relative border-2 border-transparent"
     style={{
       background: `linear-gradient(#0E0C15, #0E0C15) padding-box,
                    linear-gradient(to bottom right, #8A2BE2, #FF1493) border-box`
     }}>
  
  <div className="relative z-10">
    <div className="mb-6">
      <h3 className="text-2xl font-semibold mb-2 text-[#A259FF]">Pro</h3>
      <p className="text-gray-400 text-sm leading-relaxed">
        Designed for businesses that are prepared to accelerate their growth.
      </p>
    </div>

    <div className="mb-6">
      <div className="flex items-baseline gap-1">
        <span className="text-7xl font-medium">$99</span>
        <span className="text-gray-400">per month</span>
      </div>
    </div>

    <button 
      onClick={openModal}
      className="w-full cursor-pointer bg-[#A259FF] text-black font-semibold py-3 px-6 rounded-full transition duration-200 mb-8 hover:bg-[#8A2BE2] hover:text-white"
    >
      Start Your Free Trial
    </button>

    <ul className="space-y-3">
      <li className="flex items-center gap-3 border-b-[0.5px] pb-3 border-[#2E2E2E] text-sm text-gray-300">
        <img src="/assets/check-circle.svg" alt="" />
        Brand search
      </li>
      <li className="flex items-center gap-3 border-b-[0.5px] pb-3 border-[#2E2E2E] text-sm text-gray-300">
        <img src="/assets/check-circle.svg" alt="" />
        Mainly access to new features
      </li>
      <li className="flex items-center gap-3 border-b-[0.5px] pb-3 border-[#2E2E2E] text-sm text-gray-300">
        <img src="/assets/check-circle.svg" alt="" />
        $6,000+ brands to explore
      </li>
      <li className="flex items-center gap-3 border-b-[0.5px] pb-3 border-[#2E2E2E] text-sm text-gray-300">
        <img src="/assets/check-circle.svg" alt="" />
        Overview and review teacher
      </li>
      <li className="flex items-center gap-3 border-b-[0.5px] pb-3 border-[#2E2E2E] text-sm text-gray-300">
        <img src="/assets/check-circle.svg" alt="" />
        Social and community performance
      </li>
      <li className="flex items-center gap-3 border-b-[0.5px] pb-3 border-[#2E2E2E] text-sm text-gray-300">
        <img src="/assets/check-circle.svg" alt="" />
        Priority customer support
      </li>
      <li className="flex items-center gap-3 border-b-[0.5px] pb-3 border-[#2E2E2E] text-sm text-gray-300">
        <img src="/assets/check-circle.svg" alt="" />
        Weekly trend reports
      </li>
      <li className="flex items-center gap-3 border-b-[0.5px] pb-3 border-[#2E2E2E] text-sm text-gray-300">
        <img src="/assets/check-circle.svg" alt="" />
        Competitor insights
      </li>
      <li className="flex items-center gap-3 border-b-[0.5px] pb-3 border-[#2E2E2E] text-sm text-gray-300">
        <img src="/assets/check-circle.svg" alt="" />
        Instant growth analytics
      </li>
      <li className="flex items-center gap-3 border-b-[0.5px] pb-3 border-[#2E2E2E] text-sm text-gray-300">
        <img src="/assets/check-circle.svg" alt="" />
        Access to premium dashboards
      </li>
      <li className="flex items-center gap-3 border-b-[0.5px] pb-3 border-[#2E2E2E] text-sm text-gray-300">
        <img src="/assets/check-circle.svg" alt="" />
        Advanced search filters
      </li>
    </ul>
  </div>
</div>
          </div>
        </div>
      </section>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
          <div className="bg-[#141418] border border-white/10 rounded-2xl w-full max-w-md mx-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-semibold text-white">Start Your Free Trial</h2>
                <button
                  onClick={closeModal}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Name
                  </label>
                  <input
                    name="name"
                    type="text"
                    className={`w-full bg-[#0f0f11] border rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none transition-colors ${
                      errors.name ? 'border-red-500' : 'border-white/10 focus:border-purple-500'
                    }`}
                    placeholder="Enter your name"
                    required
                    minLength={3}
                    onChange={handleInputChange}
                  />
                  {errors.name && (
                    <p className="text-red-500 text-xs mt-1">{errors.name}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="surname" className="block text-sm font-medium text-gray-300 mb-2">
                    Surname
                  </label>
                  <input
                    name="surname"
                    type="text"
                    className={`w-full bg-[#0f0f11] border rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none transition-colors ${
                      errors.surname ? 'border-red-500' : 'border-white/10 focus:border-purple-500'
                    }`}
                    placeholder="Enter your surname"
                    required
                    minLength={3}
                    onChange={handleInputChange}
                  />
                  {errors.surname && (
                    <p className="text-red-500 text-xs mt-1">{errors.surname}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="description" className="block text-sm font-medium text-gray-300 mb-2">
                    Description
                  </label>
                  <textarea
                    name="description"
                    rows={4}
                    className="w-full bg-[#0f0f11] border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 transition-colors resize-none"
                    placeholder="Tell us about your business needs..."
                    required
                  />
                </div>

                <button
                  type="submit"
                  disabled={!!errors.name || !!errors.surname}
                  className={`w-full font-semibold py-3 px-6 rounded-full transition duration-200 mt-6 ${
                    errors.name || errors.surname
                      ? 'bg-gray-600 text-gray-400 cursor-not-allowed'
                      : 'bg-[#A259FF] text-black hover:bg-[#8A2BE2] cursor-pointer'
                  }`}
                >
                  Start Your Free Trial
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
}