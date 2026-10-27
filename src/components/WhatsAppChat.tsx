"use client";

import { useState } from "react";
import { MessageCircle, Send, X } from "lucide-react";

const whatsappUrl =
  "https://wa.me/254703827955?text=" +
  encodeURIComponent(
    "Hello Chocolate City! I'd like to make an enquiry. Please assist me."
  );

export default function WhatsAppChat() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="whatsapp-widget">
      {isOpen && (
        <section
          className="whatsapp-panel"
          aria-label="Chocolate City WhatsApp chat"
        >
          <div className="whatsapp-panel-header">
            <div className="whatsapp-avatar">
              <MessageCircle size={21} />
            </div>

            <div className="whatsapp-agent">
              <strong>Chocolate City</strong>
              <span>
                <span className="whatsapp-online-dot" />
                Here to help
              </span>
            </div>

            <button
              type="button"
              className="whatsapp-close"
              onClick={() => setIsOpen(false)}
              aria-label="Close WhatsApp chat"
            >
              <X size={19} />
            </button>
          </div>

          <div className="whatsapp-panel-body">
            <span className="whatsapp-date">WELCOME</span>

            <div className="whatsapp-message">
              Hello there! 👋
              <br />
              Welcome to Chocolate City.
              <br />
              How can we make your experience special?
              <span className="whatsapp-message-time">Now</span>
            </div>

            <p className="whatsapp-prompt">
              Chat with our team about dining, reservations, events or
              any other enquiry.
            </p>

            <a
              className="whatsapp-chat-button"
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Send size={16} />
              Chat on WhatsApp
            </a>

            <span className="whatsapp-secure-note">
              You&apos;ll continue the conversation on WhatsApp.
            </span>
          </div>
        </section>
      )}

      <button
        type="button"
        className={`whatsapp-launcher ${isOpen ? "is-open" : ""}`}
        onClick={() => setIsOpen(!isOpen)}
        aria-label={isOpen ? "Close WhatsApp chat" : "Chat with us on WhatsApp"}
        aria-expanded={isOpen}
      >
        {isOpen ? <X size={25} /> : <MessageCircle size={27} />}
        {!isOpen && <span className="whatsapp-launcher-pulse" />}
      </button>
    </div>
  );
}
