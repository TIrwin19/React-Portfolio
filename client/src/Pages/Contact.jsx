const Contact = () => {
  return (
    <div
      id="contact"
      className="flex flex-col items-center max-w-7xl mx-auto dark:text-gray-50"
    >
      <h1 className="lg:text-6xl md:text-3xl text-lg mb-8">
        Send Me A Message
      </h1>
      <form
        className="flex flex-col md:w-3/5 w-11/12 mt-5"
        action="https://api.web3forms.com/submit"
        method="POST"
      >
        <input
          type="hidden"
          name="access_key"
          value="03f768e4-3141-4d31-bc00-303638141468"
        />
        <input type="hidden" name="subject" value="New Message from User" />

        <label className=" text-lg mt-2" htmlFor="name">
          Enter Your Name
        </label>
        <input
          className="form-input bg-gray-50 dark:bg-zinc-900 rounded-sm border-0 border-b-2 border-gray-200 dark:border-zinc-700 focus:ring-0 focus:border-black dark:focus:border-gray-50 px-0.5 mt-0 w-full"
          type="text"
          name="name"
          placeholder="Your full name"
          required
        />

        <label className=" text-lg mt-2" htmlFor="name">
          Enter Your Email
        </label>
        <input
          className="form-input bg-gray-50 dark:bg-zinc-900 rounded-sm border-0 border-b-2 border-gray-200 dark:border-zinc-700 focus:ring-0 focus:border-black dark:focus:border-gray-50 px-0.5 mt-0 w-full"
          type="text"
          name="name"
          placeholder="Your email"
          required
        />

        <label className=" text-lg mt-2" htmlFor="subject">
          Enter A Subject
        </label>
        <input
          className="form-input bg-gray-50 dark:bg-zinc-900 rounded-sm border-0 border-b-2 border-gray-200 dark:border-zinc-700 focus:ring-0 focus:border-black dark:focus:border-gray-50 px-0.5 mt-0 w-full"
          type="text"
          name="subject"
          placeholder="Subject"
          required
        />

        <label className=" text-lg mt-2" htmlFor="message">
          Enter Your Message
        </label>
        <textarea
          className="form-textarea bg-gray-50 dark:bg-zinc-900 rounded-sm border-0 border-b-2 border-gray-200 dark:border-zinc-700 focus:ring-0 focus:border-black dark:focus:border-gray-50 px-0.5 mt-0 w-full"
          name="message"
          rows={3}
          required
        ></textarea>
        <button
          type="submit"
          className=" w-fit mt-5 px-2.5 py-0.5 rounded-full border border-gray-200 dark:border-zinc-700 drop-shadow hover:drop-shadow-md transition ease-in-out hover:scale-105 bg-gray-50 dark:bg-zinc-900"
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default Contact;
