// Basic data-driven projects section
const projects = [
  {
    title: "Linux Server Monitoring Stack",
    type: "Cloud / Linux",
    description:
      "Designed and configured Linux servers with SNMP-based log monitoring and alerting, improving incident visibility.",
    details: [
      "Configured SNMP agents on multiple Linux production servers for centralized log collection",
      "Implemented automated alerting system for critical system events and performance thresholds",
      "Set up log rotation and archival policies to manage disk space efficiently",
      "Created monitoring dashboards for real-time visibility into server health and performance",
      "Reduced incident response time by 40% through proactive monitoring and alerting"
    ],
    stack: ["Linux", "SNMP", "Shell", "GitLab"],
    link: null,
  },
  {
    title: "AWS Infrastructure Setup",
    type: "AWS",
    description:
      "Provisioned EC2, S3, IAM and CloudWatch for a small-scale application, focusing on security and cost optimization.",
    details: [
      "Designed and deployed VPC with public and private subnets across multiple availability zones",
      "Configured security groups and IAM roles following least privilege principles",
      "Set up CloudWatch alarms and dashboards for monitoring EC2 instances and application metrics",
      "Implemented S3 bucket policies for secure data storage and backup strategies",
      "Optimized infrastructure costs by 30% through right-sizing and reserved instance planning"
    ],
    stack: ["AWS EC2", "S3", "IAM", "CloudWatch"],
    link: null,
  },
  {
    title: "REST API for Financial App",
    type: "Backend",
    description:
      "Built REST APIs and database layer for a financial services product, ensuring reliable data access and validation.",
    details: [
      "Developed RESTful APIs using Java Spring Boot framework with proper error handling",
      "Designed and optimized MySQL database schema for financial transaction data",
      "Implemented authentication and authorization mechanisms for secure API access",
      "Created automated backup and recovery procedures for database integrity",
      "Achieved 99.9% API uptime through proper error handling and monitoring"
    ],
    stack: ["Java", "MySQL", "REST"],
    link: null,
  },
  {
    title: "Enterprise Network Design & NOC Simulation Project (Cisco)",
    type: "Networking / Cisco",
    description:
      "Designed and operated a simulated enterprise network similar to a NOC-managed environment with comprehensive routing, switching, and redundancy configurations.",
    details: [
      "Designed and configured enterprise network topology simulating real-world NOC operations",
      "Implemented VLANs, Inter-VLAN Routing, DHCP, NAT, and ACLs using Cisco CLI",
      "Configured OSPF routing protocol for dynamic routing across network segments",
      "Performed fault simulation and troubleshooting for link failures, routing failures, and misconfigured ACLs",
      "Implemented redundancy solutions using HSRP (Hot Standby Router Protocol) and EtherChannel",
      "Documented complete network topology, IP addressing scheme, routing behavior, and troubleshooting resolution steps"
    ],
    stack: ["Cisco CLI", "OSPF", "VLAN", "HSRP", "EtherChannel", "NAT", "ACLs"],
    link: null,
  },
];

// Blog posts data
const blogPosts = [
  {
    id: 1,
    title: "Understanding OSPF Routing Protocol in Enterprise Networks",
    excerpt: "Deep dive into OSPF configuration, area types, and best practices for enterprise network design.",
    category: "Networking",
    date: "2024-12-15",
    readTime: "8 min read",
    image: "🔗",
  },
  {
    id: 2,
    title: "AWS VPC Design: Best Practices for Network Security",
    excerpt: "Learn how to design secure and scalable VPC architectures with proper subnetting and security groups.",
    category: "Cloud",
    date: "2024-12-10",
    readTime: "10 min read",
    image: "☁️",
  },
  {
    id: 3,
    title: "Linux Server Hardening: A Practical Guide",
    excerpt: "Essential security practices for hardening Linux servers in production environments.",
    category: "Linux",
    date: "2024-12-05",
    readTime: "12 min read",
    image: "🐧",
  },
  {
    id: 4,
    title: "Network Troubleshooting: Common Issues and Solutions",
    excerpt: "Practical approaches to diagnosing and resolving network connectivity and routing problems.",
    category: "Networking",
    date: "2024-11-28",
    readTime: "6 min read",
    image: "🔧",
  },
];

function renderBlogs() {
  const grid = document.getElementById("blog-grid");
  if (!grid) return;

  grid.innerHTML = "";
  blogPosts.forEach((post, index) => {
    const card = document.createElement("article");
    card.className = "blog-card reveal-on-scroll";
    card.style.animationDelay = `${index * 0.1}s`;

    const formattedDate = new Date(post.date).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });

    card.innerHTML = `
      <div class="blog-card-image">${post.image}</div>
      <div class="blog-card-content">
        <div class="blog-card-meta">
          <span class="blog-category">${post.category}</span>
          <span class="blog-date">${formattedDate}</span>
        </div>
        <h3 class="blog-card-title">${post.title}</h3>
        <p class="blog-card-excerpt">${post.excerpt}</p>
        <div class="blog-card-footer">
          <span class="blog-read-time">${post.readTime}</span>
          <a href="blog.html?id=${post.id}" class="blog-read-more">
            Read more <span class="arrow">→</span>
          </a>
        </div>
      </div>
    `;

    // Add click animation
    card.addEventListener("click", (e) => {
      if (e.target.tagName !== "A") {
        window.location.href = `blog.html?id=${post.id}`;
      }
    });

    grid.appendChild(card);
  });
}

function renderProjects() {
  const grid = document.getElementById("projects-grid");
  if (!grid) return;

  grid.innerHTML = "";
  projects.forEach((project, index) => {
    const card = document.createElement("article");
    card.className = "project-card reveal-on-scroll";
    card.dataset.projectIndex = index;

    const stackHtml = project.stack
      .map((item) => `<span>${item}</span>`)
      .join("");

    const linkHtml = project.link
      ? `<a class="project-link" href="${project.link}" target="_blank" rel="noreferrer">View</a>`
      : `<span>Internal project</span>`;

    const detailsHtml = project.details
      ? `
      <div class="project-details">
        <div class="project-details-content">
          <h4 class="project-details-title">Key Achievements:</h4>
          <ul class="project-details-list">
            ${project.details.map((detail) => `<li>${detail}</li>`).join("")}
          </ul>
        </div>
      </div>
      <div class="project-expand-indicator">
        <span class="expand-text">Click to expand</span>
        <span class="expand-icon">▼</span>
      </div>
    `
      : "";

    card.innerHTML = `
      <div class="project-header">
        <h3 class="project-title">${project.title}</h3>
        <span class="project-pill">${project.type}</span>
      </div>
      <p class="project-description">${project.description}</p>
      <div class="project-meta">
        <div class="project-stack">
          ${stackHtml}
        </div>
        ${linkHtml}
      </div>
      ${detailsHtml}
    `;

    // Add click handler for expand/collapse
    card.addEventListener("click", (e) => {
      // Don't expand if clicking on a link
      if (e.target.tagName === "A") return;
      
      const isExpanded = card.classList.contains("expanded");
      
      // Close all other cards
      document.querySelectorAll(".project-card.expanded").forEach((otherCard) => {
        if (otherCard !== card) {
          otherCard.classList.remove("expanded");
        }
      });
      
      // Toggle current card
      card.classList.toggle("expanded", !isExpanded);
    });

    grid.appendChild(card);
  });
}

// Scroll reveal
function setupScrollReveal() {
  const elements = document.querySelectorAll(".reveal-on-scroll");
  if (!("IntersectionObserver" in window)) {
    elements.forEach((el) => el.classList.add("visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.15,
    }
  );

  elements.forEach((el) => observer.observe(el));
}

// Theme toggle (simple preference in localStorage)
function setupThemeToggle() {
  const btn = document.getElementById("theme-toggle");
  if (!btn) return;

  const stored = window.localStorage.getItem("theme");
  const prefersDark =
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches;
  const initial = stored || (prefersDark ? "dark" : "light");

  document.documentElement.dataset.theme = initial;
  btn.dataset.theme = initial;

  btn.addEventListener("click", () => {
    const current = document.documentElement.dataset.theme === "dark" ? "dark" : "light";
    const next = current === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = next;
    btn.dataset.theme = next;
    window.localStorage.setItem("theme", next);
  });
}

// Contact form with EmailJS
// SETUP REQUIRED: Follow instructions in EMAILJS_SETUP.md
// 1. Sign up at https://www.emailjs.com/
// 2. Create Email Service and get Service ID
// 3. Create Email Template and get Template ID  
// 4. Get Public Key from Account settings
// 5. Replace the three placeholders below with your actual values
function setupContactForm() {
  const form = document.getElementById("contact-form");
  if (!form) return;

  // Check if EmailJS is loaded
  if (typeof emailjs === 'undefined') {
    console.error('EmailJS is not loaded. Please check the script tag in index.html');
    const formNote = form.querySelector(".form-note");
    if (formNote) {
      formNote.textContent = "Email service not configured. Please contact directly at sabarish27hov@gmail.com";
      formNote.style.color = "var(--text-muted)";
    }
    return;
  }

  // Initialize EmailJS
  // Replace 'YOUR_PUBLIC_KEY' with your EmailJS public key
  // Get it from: https://dashboard.emailjs.com/admin/integration
  const PUBLIC_KEY = "YOUR_PUBLIC_KEY"; // Replace with your actual public key
  const SERVICE_ID = "YOUR_SERVICE_ID"; // Replace with your EmailJS Service ID
  const TEMPLATE_ID = "YOUR_TEMPLATE_ID"; // Replace with your EmailJS Template ID

  // Check if keys are configured
  if (PUBLIC_KEY === "YOUR_PUBLIC_KEY" || SERVICE_ID === "YOUR_SERVICE_ID" || TEMPLATE_ID === "YOUR_TEMPLATE_ID") {
    console.warn('EmailJS not configured. Please set up your keys in script.js');
    const formNote = form.querySelector(".form-note");
    if (formNote) {
      formNote.textContent = "Email service not configured. Please contact directly at sabarish27hov@gmail.com";
      formNote.style.color = "var(--text-muted)";
    }
    // Still allow form submission but show message
  }

  emailjs.init(PUBLIC_KEY);

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const btn = form.querySelector("button[type='submit']");
    const formNote = form.querySelector(".form-note");
    if (!btn) return;

    const originalText = btn.textContent;
    const originalNote = formNote ? formNote.textContent : "";
    
    // Get form values
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const subject = document.getElementById("subject").value || "Contact from Portfolio";
    const message = document.getElementById("message").value;

    // Disable button and show loading state
    btn.disabled = true;
    btn.textContent = "Sending...";
    if (formNote) {
      formNote.textContent = "Sending your message...";
      formNote.style.color = "var(--text-muted)";
    }

    // Check if EmailJS is properly configured
    if (PUBLIC_KEY === "YOUR_PUBLIC_KEY" || SERVICE_ID === "YOUR_SERVICE_ID" || TEMPLATE_ID === "YOUR_TEMPLATE_ID") {
      btn.disabled = false;
      btn.textContent = originalText;
      if (formNote) {
        formNote.textContent = "Email service not configured. Please email directly at sabarish27hov@gmail.com";
        formNote.style.color = "rgba(239, 68, 68, 0.8)";
      }
      // Open email client as fallback
      window.location.href = `mailto:sabarish27hov@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`From: ${name} (${email})\n\n${message}`)}`;
      return;
    }

    try {
      // Send email using EmailJS
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          to_email: "sabarish27hov@gmail.com",
          from_name: name,
          from_email: email,
          subject: subject,
          message: message,
          reply_to: email,
        }
      );

      // Success
      btn.textContent = "Message Sent! ✓";
      btn.style.background = "rgba(34, 197, 94, 0.2)";
      btn.style.borderColor = "rgba(34, 197, 94, 0.5)";
      
      if (formNote) {
        formNote.textContent = "Thank you! Your message has been sent successfully.";
        formNote.style.color = "var(--accent)";
      }

      // Reset form
      form.reset();

      // Reset button after delay
      setTimeout(() => {
        btn.disabled = false;
        btn.textContent = originalText;
        btn.style.background = "";
        btn.style.borderColor = "";
        if (formNote) {
          formNote.textContent = originalNote;
          formNote.style.color = "";
        }
      }, 3000);

    } catch (error) {
      console.error("EmailJS Error:", error);
      
      // Error handling
      btn.textContent = "Error - Try Again";
      btn.style.background = "rgba(239, 68, 68, 0.2)";
      btn.style.borderColor = "rgba(239, 68, 68, 0.5)";
      
      if (formNote) {
        formNote.textContent = "Sorry, there was an error sending your message. Please try again or email directly.";
        formNote.style.color = "rgba(239, 68, 68, 0.8)";
      }

      // Reset button after delay
      setTimeout(() => {
        btn.disabled = false;
        btn.textContent = originalText;
        btn.style.background = "";
        btn.style.borderColor = "";
        if (formNote) {
          formNote.textContent = originalNote;
          formNote.style.color = "";
        }
      }, 4000);
    }
  });
}

// Smooth scroll for anchor links
function setupSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener("click", (e) => {
      const targetId = link.getAttribute("href");
      if (!targetId || targetId === "#") return;

      const target = document.querySelector(targetId);
      if (!target) return;
      e.preventDefault();

      const headerOffset = 70;
      const rect = target.getBoundingClientRect();
      const absoluteY = rect.top + window.scrollY;

      window.scrollTo({
        top: absoluteY - headerOffset,
        behavior: "smooth",
      });
    });
  });
}

// Set dynamic year
function setYear() {
  const span = document.getElementById("year");
  if (span) span.textContent = new Date().getFullYear();
}

document.addEventListener("DOMContentLoaded", () => {
  renderProjects();
  renderBlogs();
  setYear();
  setupThemeToggle();
  setupContactForm();
  setupSmoothScroll();

  // mark some static elements as reveal-on-scroll for animation
  document
    .querySelectorAll(
      ".timeline-item, .skill-column, .highlight-card, .contact-form, .project-card, .blog-card"
    )
    .forEach((el) => el.classList.add("reveal-on-scroll"));

  setupScrollReveal();
});


