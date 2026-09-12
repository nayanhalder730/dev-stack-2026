import footerLogo from "../assets/logo-text.png";

export default function Footer() {
  return (
    <footer className="w-full bg-[#f8f5f5] text-[#374151] mt-10px">


      <div className="container mx-auto grid grid-cols-1 gap-8 px-6 py-10 sm:grid-cols-2 md:grid-cols-12 md:gap-3">


        <div className="md:col-span-5">
          <div className="flex items-center">
            <img
              src={footerLogo}
              alt="Dev Stack"
              className="w-[85px] sm:w-[90px]"
            />
          </div>

          <p className="mt-3 max-w-[320px] text-[13px] leading-[20px] text-[#9ca3af]">
            Curated tools, technologies, and resources for developers
            building modern software.
          </p>

          <div className="mt-5 flex gap-6">
            <h4 className="text-[13px] text-[#374151]">GitHub</h4>
            <h4 className="text-[13px] text-[#374151]">Twitter</h4>
            <h4 className="text-[13px] text-[#374151]">LinkedIn</h4>
          </div>
        </div>

        <div className="md:col-span-2">
          <h2 className="mb-4 text-[12px] font-bold text-[#374151]">
            PRODUCT
          </h2>

          <div className="space-y-3">
            <h4 className="text-[12px] text-[#9ca3af]">Home</h4>
            <h4 className="text-[12px] text-[#9ca3af]">
              Technologies
            </h4>
            <h4 className="text-[12px] text-[#9ca3af]">
              Projects
            </h4>
          </div>
        </div>

        <div className="md:col-span-2">
          <h2 className="mb-4 text-[12px] font-bold text-[#374151]">
            COMPANY
          </h2>

          <div className="space-y-3">
            <h4 className="text-[12px] text-[#9ca3af]">About</h4>
            <h4 className="text-[12px] text-[#9ca3af]">Contact</h4>
            <h4 className="text-[12px] text-[#9ca3af]">Careers</h4>
          </div>
        </div>

        <div className="md:col-span-2">
          <h2 className="mb-4 text-[12px] font-bold text-[#374151]">
            LEGAL
          </h2>

          <div className="space-y-3">
            <h4 className="text-[12px] text-[#9ca3af]">
              Privacy Policy
            </h4>
            <h4 className="text-[12px] text-[#9ca3af]">
              Terms of Service
            </h4>
          </div>
        </div>
      </div>

      <div className="container mx-auto border-t border-[#f1f1f1] px-6 py-5">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">

          <h2 className="text-[11px] text-[#b0b0b0]">
            © 2026 Dev Stack. All rights reserved.
          </h2>

          <div className="flex gap-6">
            <h4 className="text-[11px] text-[#b0b0b0]">
              Privacy
            </h4>
            <h4 className="text-[11px] text-[#b0b0b0]">
              Terms
            </h4>
          </div>

        </div>
      </div>

    </footer>
  );
}