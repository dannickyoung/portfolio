import { LinkedinLogo, Envelope } from 'phosphor-react';

export default function WebsiteFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-[#1A1A1A]/10 mt-20 md:mt-24 pt-10 pb-16 md:pb-20">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-16">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <p className="text-sm text-[#6C6863]">
            All rights reserved. {currentYear} / dannickyoung.com
          </p>
          <div className="flex gap-6 text-sm text-[#6C6863]">
            <a
              href={`https://www.linkedin.com/in/dannickyoung`}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#1A1A1A] transition-colors flex items-center gap-2"
            >
              <LinkedinLogo weight="thin" size={16} />
              LinkedIn
            </a>
            <a
              href="mailto:dannickyoung@outlook.com"
              className="hover:text-[#1A1A1A] transition-colors flex items-center gap-2"
            >
              <Envelope weight="thin" size={16} />
              Email
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
