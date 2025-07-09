import React, { useState } from "react";
import PhoneInput from "react-phone-input-2";
import 'react-phone-input-2/lib/style.css'; // don't modify this

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    projectType: "",
    timeline: "",
    comments: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handlePhoneChange = (value) => {
    setFormData(prev => ({ ...prev, phone: value }));
  };

  const isFormValid = Object.values(formData).every((val) => val.trim() !== "");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isFormValid) return;
    setLoading(true);

    try {
      const res = await fetch("https://codecrafted-backend.onrender.com/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const result = await res.json();

      if (res.ok) {
        alert("✅ Message submitted!");
        setFormData({
          name: "", email: "", company: "", phone: "", projectType: "", timeline: "", comments: ""
        });
      } else {
        alert(`❌ Submission failed: ${result.error || "Unknown error"}`);
      }
    } catch (err) {
      console.error(err);
      alert("⚠️ Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="min-h-screen bg-white dark:bg-black px-6 py-10 flex items-center justify-center">
      <div className="w-full max-w-4xl text-black dark:text-white">
        <h2 className="text-4xl font-bold text-center mb-8">PLAN YOUR PROJECT</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Input label="Name" name="name" value={formData.name} onChange={handleChange} />
            <Input label="Email" name="email" type="email" value={formData.email} onChange={handleChange} />
            <Input label="Company" name="company" value={formData.company} onChange={handleChange} />

            <div className="w-full">
              <label className="text-xs uppercase tracking-widest text-gray-500 dark:text-gray-400">
                Phone Number
              </label>
              <PhoneInput
  country={"in"}
  value={formData.phone}
  onChange={handlePhoneChange}
  enableSearch
  specialLabel=""
  inputClass="!w-full !bg-black !text-white !py-2 !pl-14 !pr-4 !border-b !border-white  focus:!outline-none"
  buttonClass="!bg-black !border-none !left-0 !absolute"
  containerClass="!relative !bg-black"
  dropdownClass="!bg-black !text-white !shadow-lg !border !border-gray-700 !max-h-60 !overflow-y-auto !z-50 !rounded-md [&_li]:!bg-black [&_li]:!text-white [&_li:hover]:!bg-black [&_li:hover]:!text-white"
  searchClass="!w-full !p-2 !text-sm !bg-black focus:!bg-black-300 !text-white !border !border-gray-700 !rounded-md !mb-1 focus:!ring-yellow-500 focus:!outline-none"
/>
            </div>

            <Input label="Project Type" name="projectType" value={formData.projectType} onChange={handleChange} />
            <Select
              label="Timeline"
              name="timeline"
              value={formData.timeline}
              onChange={handleChange}
              options={["Less than 1 month", "1-2 months", "3+ months"]}
            />
          </div>

          <div>
            <label className="text-xs uppercase tracking-widest text-gray-500 dark:text-gray-400">
              Comments
            </label>
            <textarea
              name="comments"
              rows="3"
              value={formData.comments}
              onChange={handleChange}
              className="w-full bg-transparent border-b border-gray-400 dark:border-gray-600 py-2 focus:outline-none focus:border-yellow-500 text-black dark:text-white"
              placeholder="Anything you'd like to share?"
            />
          </div>

          <div className="text-center">
            <button
              type="submit"
              disabled={!isFormValid || loading}
              className={`border px-8 py-2 uppercase tracking-widest transition ${
                isFormValid && !loading
                  ? "border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-black"
                  : "border-gray-400 text-gray-400 cursor-not-allowed"
              }`}
            >
              {loading ? "Sending..." : "Submit"}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

const Input = ({ label, name, value, onChange, type = "text" }) => (
  <div className="w-full">
    <label className="text-xs uppercase tracking-widest text-gray-500 dark:text-gray-400">{label}</label>
    <input
      name={name}
      type={type}
      value={value}
      onChange={onChange}
      className="w-full bg-transparent border-b border-gray-400 dark:border-gray-600 py-2 focus:outline-none focus:border-yellow-500 text-black dark:text-white"
    />
  </div>
);

const Select = ({ label, name, value, onChange, options }) => (
  <div className="w-full">
    <label className="text-xs uppercase tracking-widest text-gray-500 dark:text-gray-400">{label}</label>
    <select
      name={name}
      value={value}
      onChange={onChange}
      className="w-full bg-transparent border-b border-gray-400 dark:border-gray-600 py-2 focus:outline-none focus:border-yellow-500 text-black dark:text-white"
    >
      <option value="">Select...</option>
      {options.map((opt) => (
        <option key={opt} value={opt} className="text-black">
          {opt}
        </option>
      ))}
    </select>
  </div>
);

export default Contact;
