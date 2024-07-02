import Footer from "../components/footer";
import EnquiryForm from "../components/enquiry-form";

export default function CustomerSupport() {
  return (
    <>
      <main className="pt-16 mx-auto w-[100vw] xl:w-[1500px]">
        <div className="max-w-5xl mx-auto my-10 p-10 border border-gray-300 shadow-lg flex">
          {/* Left Section */}
          <div className="w-1/3 pr-8">
            <h2 className="text-4xl font-bold mb-6">Contact.</h2>
            <div className="space-y-4">
              <p className="flex items-center">
                Thanks for getting in touch. The average response time is one
                business day.
              </p>
              <p className="flex items-center font-bold">
                <svg
                  className="w-5 h-5 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  ></path>
                </svg>
                + (123) 456-7890
              </p>
              <p className="flex items-center font-bold">
                <svg
                  className="w-5 h-5 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  ></path>
                </svg>
                support@nextstore.com
              </p>
            </div>
          </div>

          {/* Right Section */}
          <div className="w-2/3">
            <EnquiryForm />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
