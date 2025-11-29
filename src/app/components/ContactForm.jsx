import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const ContactForm = () => {
    const formRef = useRef(null);
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();
        setLoading(true);

        emailjs
            .sendForm(
                'service_uppzhrr',      // ⬅️ Replace with actual
                'template_c4puvkl',     // ⬅️ Replace with actual
                formRef.current,
                'cbeKpj2_a-NIx8hTV'  // ⬅️ Replace with actual
            )
            .then(() => {
                setSuccess(true);
                setLoading(false);
                formRef.current?.reset();
            })
            .catch(() => {
                setSuccess(false);
                setLoading(false);
            });
    };

    return (
        <div className="na bg-gradient-to-r from-[#BFE0E3] to-pink-200 py-15">

            <div className="max-w-lg mx-auto bg-gradient-to-r from-rose-200 from-10% via-red-200 via-30% to-yellow-100 to-90%
 border shadow-md  pt-10 p-8 border-10 rounded-tr-[100px]
">
                <h2 className="text-2xl font-bold text-[#3b4890] mb-4">Contact Rahul <span className='text-xl font-bold text-red-500 mb-4'>now...   </span>💌</h2>

                <form ref={formRef} onSubmit={sendEmail} className="space-y-4">
                    <input
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        required
                        className="w-full px-4 py-2 border text-black rounded-md focus:outline-none focus:ring-2 focus:ring-[#3b4890]"
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Your Email"
                        required
                        className="w-full px-4 py-2  text-black border rounded-md focus:outline-none focus:ring-2 focus:ring-[#3b4890]"
                    />
                    <textarea
                        name="message"
                        placeholder="Your Message"
                        rows={5}
                        required
                        className="w-full px-4 py-2 border  text-black rounded-md focus:outline-none focus:ring-2 focus:ring-[#3b4890]"
                    ></textarea>

                    <button
                        type="submit"
                        className="bg-[#3b4890] text-white px-6 py-2 rounded-md hover:bg-[#2f3a73] w-full"
                        disabled={loading}
                    >
                        {loading ? 'Sending...' : 'Send Message Now...'}
                    </button>

                    {success && (
                        <p className="text-green-600 text-sm mt-2 text-center">Email sent successfully!</p>
                    )}
                </form>
            </div>
        </div>
    );
};

export default ContactForm;
