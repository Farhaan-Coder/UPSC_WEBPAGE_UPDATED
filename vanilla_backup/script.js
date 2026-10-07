// UPSC ZONE AI — Minimal Interactions Script

document.addEventListener('DOMContentLoaded', () => {
  // 1. Mobile Navigation Menu Toggle
  const mobileToggle = document.getElementById('mobileToggle');
  const navLinks = document.getElementById('navLinks');

  if (mobileToggle && navLinks) {
    mobileToggle.addEventListener('click', () => {
      navLinks.classList.toggle('active');
      mobileToggle.classList.toggle('open');
    });

    // Close menu when clicking any nav item
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        mobileToggle.classList.remove('open');
      });
    });
  }

  // 2. Interactive Task Checkbox Toggling (Hero & Daily Plan mockups)
  const taskRows = document.querySelectorAll('.task-row, .task-item');
  taskRows.forEach(row => {
    row.addEventListener('click', () => {
      const box = row.querySelector('.task-box, .task-check');
      if (box) {
        box.classList.toggle('checked');
        if (box.classList.contains('checked')) {
          box.innerHTML = `
            <svg width="11" height="11" viewBox="0 0 12 12" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M2 6l3 3 5-5"/>
            </svg>
          `;
          row.classList.add('completed', 'done');
        } else {
          box.innerHTML = '';
          row.classList.remove('completed', 'done');
        }
      }
    });
  });

  // 3. AI Assistant Mode Tabs Toggle (Dark Feature Section)
  const aiTabs = document.querySelectorAll('.ai-tab');
  const userBubbleText = document.querySelector('.ai-user-bubble .bubble-text');
  const aiIntroText = document.querySelector('.ai-intro-text');

  const tabContents = {
    concept: {
      user: "Why is India called a 'quasi-federal' state? Explain with examples for a Mains answer.",
      ai: "India combines a federal division of powers with a strong Union. For a balanced answer, organise the idea into three parts:"
    },
    answer: {
      user: "How to structure a 15-marker answer on Judicial Review vs Judicial Activism?",
      ai: "Start with constitutional grounds (Articles 13, 32, 226), contrast self-restraint with intervention, and conclude with separation of powers."
    },
    revise: {
      user: "Give me 3 key recall points for Fundamental Duties under Article 51A.",
      ai: "Swaran Singh Committee genesis, 42nd & 86th Amendments, non-enforceable character alongside legal enforcement through statutes."
    }
  };

  aiTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      aiTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      const mode = tab.getAttribute('data-tab');
      if (mode && tabContents[mode] && userBubbleText && aiIntroText) {
        userBubbleText.textContent = tabContents[mode].user;
        aiIntroText.textContent = tabContents[mode].ai;
      }
    });
  });

  // 4. Quick Search Focus Shortcut (Command/Ctrl + K)
  document.addEventListener('keydown', (e) => {
    if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
      e.preventDefault();
      const searchBox = document.querySelector('.dash-top-search');
      if (searchBox) {
        searchBox.scrollIntoView({ behavior: 'smooth', block: 'center' });
        searchBox.style.boxShadow = '0 0 0 2px #E5AF55';
        setTimeout(() => {
          searchBox.style.boxShadow = '';
        }, 1500);
      }
    }
  });
});
