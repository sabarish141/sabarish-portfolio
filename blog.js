// Blog post content data
const blogContent = {
  1: {
    title: "Understanding OSPF Routing Protocol in Enterprise Networks",
    category: "Networking",
    date: "2024-12-15",
    readTime: "8 min read",
    image: "🔗",
    content: `
      <p>Open Shortest Path First (OSPF) is one of the most widely used interior gateway protocols (IGP) in enterprise networks. As a link-state routing protocol, OSPF provides efficient routing by maintaining a complete map of the network topology.</p>
      
      <h2>OSPF Fundamentals</h2>
      <p>OSPF operates by exchanging Link State Advertisements (LSAs) between routers to build a complete topology database. Each router calculates the shortest path to all destinations using Dijkstra's algorithm.</p>
      
      <h3>Key Features:</h3>
      <ul>
        <li><strong>Fast Convergence:</strong> OSPF quickly adapts to network changes, recalculating routes when topology changes occur.</li>
        <li><strong>Scalability:</strong> Supports hierarchical design through areas, allowing networks to scale efficiently.</li>
        <li><strong>Load Balancing:</strong> Can distribute traffic across multiple equal-cost paths.</li>
        <li><strong>VLSM Support:</strong> Fully supports Variable Length Subnet Masking for efficient IP address utilization.</li>
      </ul>
      
      <h2>OSPF Area Types</h2>
      <p>OSPF uses areas to divide large networks into manageable sections:</p>
      <ul>
        <li><strong>Backbone Area (Area 0):</strong> The core area that all other areas must connect to.</li>
        <li><strong>Standard Areas:</strong> Regular areas that connect to the backbone.</li>
        <li><strong>Stub Areas:</strong> Areas that don't receive external routes, reducing LSA traffic.</li>
        <li><strong>Totally Stubby Areas:</strong> Even more restricted, only receiving default routes.</li>
        <li><strong>Not-So-Stubby Areas (NSSA):</strong> Allows limited external route injection.</li>
      </ul>
      
      <h2>Best Practices for OSPF Configuration</h2>
      <ol>
        <li><strong>Design Hierarchical Topology:</strong> Use areas to create a scalable network structure.</li>
        <li><strong>Optimize Timers:</strong> Adjust hello and dead intervals based on network requirements.</li>
        <li><strong>Use Authentication:</strong> Implement OSPF authentication to secure routing updates.</li>
        <li><strong>Monitor OSPF Database:</strong> Regularly check the LSDB for consistency and optimal size.</li>
        <li><strong>Plan for Redundancy:</strong> Design multiple paths and use OSPF cost manipulation for traffic engineering.</li>
      </ol>
      
      <h2>Common OSPF Issues and Troubleshooting</h2>
      <p>When troubleshooting OSPF, check the following:</p>
      <ul>
        <li>Verify neighbor relationships using <code>show ip ospf neighbor</code></li>
        <li>Check the OSPF database with <code>show ip ospf database</code></li>
        <li>Verify area configuration and connectivity</li>
        <li>Ensure network statements are correctly configured</li>
        <li>Check for authentication mismatches</li>
      </ul>
      
      <p>Understanding OSPF is crucial for any network engineer working with enterprise networks. Proper design and configuration can significantly improve network performance and reliability.</p>
    `
  },
  2: {
    title: "AWS VPC Design: Best Practices for Network Security",
    category: "Cloud",
    date: "2024-12-10",
    readTime: "10 min read",
    image: "☁️",
    content: `
      <p>Amazon Virtual Private Cloud (VPC) is the foundation of network security in AWS. A well-designed VPC architecture is essential for creating secure, scalable, and cost-effective cloud infrastructure.</p>
      
      <h2>VPC Architecture Fundamentals</h2>
      <p>A VPC is a logically isolated section of the AWS cloud where you can launch AWS resources. Understanding VPC components is crucial for proper design:</p>
      
      <h3>Core Components:</h3>
      <ul>
        <li><strong>Subnets:</strong> Logical divisions of your VPC IP address range, typically split into public and private subnets.</li>
        <li><strong>Route Tables:</strong> Control traffic routing between subnets and to external networks.</li>
        <li><strong>Internet Gateway (IGW):</strong> Enables communication between your VPC and the internet.</li>
        <li><strong>NAT Gateway:</strong> Allows private subnets to access the internet while remaining private.</li>
        <li><strong>Security Groups:</strong> Stateful firewalls at the instance level.</li>
        <li><strong>Network ACLs:</strong> Stateless firewalls at the subnet level.</li>
      </ul>
      
      <h2>Best Practices for VPC Design</h2>
      
      <h3>1. Subnet Design</h3>
      <p>Design your subnets with the following principles:</p>
      <ul>
        <li>Use CIDR blocks efficiently - plan for future growth</li>
        <li>Separate public and private subnets across multiple Availability Zones</li>
        <li>Reserve IP addresses for VPC services (first 4 and last 1 IP in each subnet)</li>
        <li>Use /24 subnets for easier management and sufficient IP space</li>
      </ul>
      
      <h3>2. Security Group Configuration</h3>
      <p>Follow the principle of least privilege:</p>
      <ul>
        <li>Create specific security groups for each application tier</li>
        <li>Use descriptive names and tags</li>
        <li>Reference security groups instead of IP addresses when possible</li>
        <li>Regularly audit and review security group rules</li>
      </ul>
      
      <h3>3. Network Segmentation</h3>
      <p>Implement proper network segmentation:</p>
      <ul>
        <li>Separate web, application, and database tiers</li>
        <li>Use private subnets for backend resources</li>
        <li>Implement VPC peering or Transit Gateway for multi-VPC connectivity</li>
        <li>Consider using AWS PrivateLink for secure service access</li>
      </ul>
      
      <h2>Monitoring and Logging</h2>
      <p>Enable comprehensive monitoring:</p>
      <ul>
        <li>Enable VPC Flow Logs for network traffic analysis</li>
        <li>Use CloudWatch for monitoring network metrics</li>
        <li>Set up CloudTrail for API logging</li>
        <li>Implement AWS Config for compliance monitoring</li>
      </ul>
      
      <p>A well-designed VPC is the cornerstone of secure AWS infrastructure. By following these best practices, you can create a robust, scalable, and secure network architecture in the cloud.</p>
    `
  },
  3: {
    title: "Linux Server Hardening: A Practical Guide",
    category: "Linux",
    date: "2024-12-05",
    readTime: "12 min read",
    image: "🐧",
    content: `
      <p>Linux server hardening is the process of securing a Linux system by reducing its attack surface and minimizing vulnerabilities. This guide covers essential practices for hardening production Linux servers.</p>
      
      <h2>Initial Security Configuration</h2>
      
      <h3>1. System Updates</h3>
      <p>Always start with updating your system:</p>
      <pre><code># For RHEL/CentOS
sudo yum update -y

# For Ubuntu/Debian
sudo apt update && sudo apt upgrade -y</code></pre>
      
      <h3>2. Remove Unnecessary Packages</h3>
      <p>Remove packages and services you don't need to reduce attack surface:</p>
      <pre><code># List installed packages
rpm -qa  # RHEL/CentOS
dpkg -l  # Ubuntu/Debian

# Remove unnecessary services
sudo systemctl disable [service-name]
sudo systemctl stop [service-name]</code></pre>
      
      <h2>User and Access Management</h2>
      
      <h3>SSH Hardening</h3>
      <p>Secure SSH access by editing <code>/etc/ssh/sshd_config</code>:</p>
      <ul>
        <li>Disable root login: <code>PermitRootLogin no</code></li>
        <li>Use key-based authentication: <code>PasswordAuthentication no</code></li>
        <li>Change default port: <code>Port 2222</code></li>
        <li>Limit login attempts: <code>MaxAuthTries 3</code></li>
        <li>Disable empty passwords: <code>PermitEmptyPasswords no</code></li>
      </ul>
      
      <h3>User Management</h3>
      <ul>
        <li>Create individual user accounts with sudo privileges</li>
        <li>Use strong password policies</li>
        <li>Implement account lockout policies</li>
        <li>Regularly audit user accounts and remove inactive ones</li>
      </ul>
      
      <h2>Firewall Configuration</h2>
      <p>Configure firewall rules to allow only necessary traffic:</p>
      
      <h3>Using firewalld (RHEL/CentOS):</h3>
      <pre><code>sudo firewall-cmd --permanent --add-service=ssh
sudo firewall-cmd --permanent --add-service=http
sudo firewall-cmd --reload</code></pre>
      
      <h3>Using ufw (Ubuntu):</h3>
      <pre><code>sudo ufw allow ssh
sudo ufw allow http
sudo ufw enable</code></pre>
      
      <h2>File System Security</h2>
      <ul>
        <li>Set proper file permissions using chmod and chown</li>
        <li>Use umask to set default permissions</li>
        <li>Implement file integrity monitoring (AIDE, Tripwire)</li>
        <li>Encrypt sensitive data at rest</li>
      </ul>
      
      <h2>Logging and Monitoring</h2>
      <p>Implement comprehensive logging:</p>
      <ul>
        <li>Configure rsyslog for centralized logging</li>
        <li>Set up log rotation to prevent disk fill</li>
        <li>Monitor system logs regularly</li>
        <li>Use tools like fail2ban for intrusion prevention</li>
      </ul>
      
      <h2>Additional Hardening Steps</h2>
      <ul>
        <li>Disable unnecessary network services</li>
        <li>Configure SELinux or AppArmor</li>
        <li>Implement kernel hardening parameters</li>
        <li>Regular security audits and vulnerability scanning</li>
        <li>Keep security patches up to date</li>
      </ul>
      
      <p>Server hardening is an ongoing process. Regularly review and update your security configurations to protect against emerging threats.</p>
    `
  },
  4: {
    title: "Network Troubleshooting: Common Issues and Solutions",
    category: "Networking",
    date: "2024-11-28",
    readTime: "6 min read",
    image: "🔧",
    content: `
      <p>Network troubleshooting is a critical skill for network engineers. This article covers common network issues and systematic approaches to resolving them.</p>
      
      <h2>The Troubleshooting Methodology</h2>
      <p>Follow a structured approach:</p>
      <ol>
        <li><strong>Define the Problem:</strong> Understand what's not working and gather symptoms</li>
        <li><strong>Gather Information:</strong> Collect logs, error messages, and network diagrams</li>
        <li><strong>Develop a Hypothesis:</strong> Based on symptoms, identify likely causes</li>
        <li><strong>Test the Hypothesis:</strong> Use diagnostic tools to verify</li>
        <li><strong>Implement Solution:</strong> Apply fixes and verify resolution</li>
        <li><strong>Document:</strong> Record the issue and solution for future reference</li>
      </ol>
      
      <h2>Common Network Issues</h2>
      
      <h3>1. Connectivity Issues</h3>
      <p><strong>Symptoms:</strong> Cannot reach destination, intermittent connectivity</p>
      <p><strong>Troubleshooting Steps:</strong></p>
      <ul>
        <li>Check physical layer: cables, interfaces, link status</li>
        <li>Verify IP configuration: <code>ipconfig</code> or <code>ifconfig</code></li>
        <li>Test connectivity: <code>ping</code>, <code>traceroute</code></li>
        <li>Check routing table: <code>route -n</code> or <code>ip route</code></li>
        <li>Verify DNS resolution: <code>nslookup</code> or <code>dig</code></li>
      </ul>
      
      <h3>2. Routing Problems</h3>
      <p><strong>Symptoms:</strong> Traffic not reaching destination, asymmetric routing</p>
      <p><strong>Troubleshooting Steps:</strong></p>
      <ul>
        <li>Check routing table: <code>show ip route</code></li>
        <li>Verify routing protocol status: <code>show ip ospf neighbor</code></li>
        <li>Check for routing loops</li>
        <li>Verify route redistribution if multiple protocols</li>
        <li>Check ACLs that might block routing updates</li>
      </ul>
      
      <h3>3. VLAN Issues</h3>
      <p><strong>Symptoms:</strong> Cannot communicate between VLANs, incorrect VLAN assignment</p>
      <p><strong>Troubleshooting Steps:</strong></p>
      <ul>
        <li>Verify VLAN configuration: <code>show vlan</code></li>
        <li>Check trunk configuration: <code>show interfaces trunk</code></li>
        <li>Verify inter-VLAN routing configuration</li>
        <li>Check switchport mode and allowed VLANs</li>
      </ul>
      
      <h2>Essential Troubleshooting Commands</h2>
      
      <h3>Cisco Commands:</h3>
      <ul>
        <li><code>show ip interface brief</code> - Interface status</li>
        <li><code>show ip route</code> - Routing table</li>
        <li><code>show cdp neighbors</code> - Neighbor discovery</li>
        <li><code>show ip ospf neighbor</code> - OSPF neighbors</li>
        <li><code>show access-lists</code> - ACL configuration</li>
      </ul>
      
      <h3>Linux Commands:</h3>
      <ul>
        <li><code>ip addr show</code> - Interface configuration</li>
        <li><code>ip route show</code> - Routing table</li>
        <li><code>ss -tuln</code> - Listening ports</li>
        <li><code>tcpdump</code> - Packet capture</li>
        <li><code>netstat</code> - Network connections</li>
      </ul>
      
      <h2>Packet Flow Analysis</h2>
      <p>Understanding packet flow helps identify where issues occur:</p>
      <ol>
        <li>Source device checks routing table</li>
        <li>ARP resolution for next-hop MAC address</li>
        <li>Packet forwarded to next hop</li>
        <li>Each router performs routing decision</li>
        <li>Destination receives packet</li>
      </ol>
      
      <h2>Best Practices</h2>
      <ul>
        <li>Maintain accurate network documentation</li>
        <li>Use network monitoring tools proactively</li>
        <li>Implement change management processes</li>
        <li>Regular network audits and health checks</li>
        <li>Keep network diagrams updated</li>
      </ul>
      
      <p>Effective troubleshooting requires both technical knowledge and systematic methodology. Practice and experience are key to becoming proficient at resolving network issues quickly.</p>
    `
  }
};

// Load blog post based on URL parameter
function loadBlogPost() {
  const urlParams = new URLSearchParams(window.location.search);
  const postId = parseInt(urlParams.get('id'));
  
  if (!postId || !blogContent[postId]) {
    document.querySelector('.blog-post-page').innerHTML = `
      <div class="container">
        <h1>Blog Post Not Found</h1>
        <p>The blog post you're looking for doesn't exist.</p>
        <a href="index.html#blog">Back to Blog</a>
      </div>
    `;
    return;
  }
  
  const post = blogContent[postId];
  const formattedDate = new Date(post.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  
  document.getElementById('blog-title').textContent = post.title;
  document.getElementById('blog-category').textContent = post.category;
  document.getElementById('blog-date').textContent = formattedDate;
  document.getElementById('blog-read-time').textContent = post.readTime;
  document.getElementById('blog-image').textContent = post.image;
  document.getElementById('blog-content').innerHTML = post.content;
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
  loadBlogPost();
  setYear();
  setupThemeToggle();
  
  // Add reveal-on-scroll to blog content
  document.querySelectorAll('.blog-post-content h2, .blog-post-content h3, .blog-post-content p, .blog-post-content ul, .blog-post-content ol')
    .forEach((el) => el.classList.add('reveal-on-scroll'));
  
  setupScrollReveal();
});

