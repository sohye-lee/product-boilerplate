-- Seed data for the AI Product platform
-- Using profile_id: dcda41c5-34cd-44d7-90e3-7c5ca2ab4e87

-- Categories
INSERT INTO public.categories (name, description, created_at, updated_at)
VALUES 
  ('AI Assistants', 'Personal and professional AI assistants that help with productivity and tasks', NOW(), NOW()),
  ('AI Development Tools', 'Tools that help developers build and deploy AI applications', NOW(), NOW()),
  ('AI Content Creation', 'Tools for generating text, images, videos, and other content using AI', NOW(), NOW()),
  ('AI Analytics', 'Data analysis and visualization tools powered by artificial intelligence', NOW(), NOW()),
  ('AI Education', 'Platforms and tools for learning about AI and machine learning', NOW(), NOW());

-- Products
INSERT INTO public.products (name, tagline, description, how_it_works, icon, url, stats, profile_id, category_id, created_at, updated_at)
VALUES 
  ('CodeGenius', 'AI-powered code generation and review', 'CodeGenius helps developers write better code faster with AI-powered suggestions and automated code reviews. It integrates with your existing development workflow and learns from your coding style.', 'CodeGenius analyzes your codebase and provides intelligent suggestions as you type. It can also review your code for potential bugs and suggest improvements based on best practices.', 'https://example.com/icons/codegenius.png', 'https://codegenius.ai', '{"views": 12345, "reviews": 87}', 'dcda41c5-34cd-44d7-90e3-7c5ca2ab4e87', 2, NOW(), NOW()),
  ('DesignMind', 'AI that understands design principles', 'DesignMind is an AI assistant for designers that helps create beautiful, accessible, and user-friendly interfaces. It provides suggestions based on design principles and user research.', 'DesignMind analyzes your design and provides feedback based on established design principles. It can also generate design variations and suggest improvements for accessibility.', 'https://example.com/icons/designmind.png', 'https://designmind.ai', '{"views": 8765, "reviews": 54}', 'dcda41c5-34cd-44d7-90e3-7c5ca2ab4e87', 1, NOW(), NOW()),
  ('ContentForge', 'Create engaging content with AI', 'ContentForge helps marketers and content creators generate high-quality content for various platforms. It can write blog posts, social media updates, and even video scripts.', 'ContentForge uses advanced language models to generate content based on your input. You can specify the tone, style, and target audience, and the AI will create content that matches your requirements.', 'https://example.com/icons/contentforge.png', 'https://contentforge.ai', '{"views": 15678, "reviews": 92}', 'dcda41c5-34cd-44d7-90e3-7c5ca2ab4e87', 3, NOW(), NOW()),
  ('DataInsight', 'Transform data into actionable insights', 'DataInsight is an AI-powered analytics platform that helps businesses understand their data and make better decisions. It can analyze complex datasets and generate visualizations and reports.', 'DataInsight connects to your data sources and uses AI to identify patterns and trends. It generates interactive visualizations and provides recommendations based on the analysis.', 'https://example.com/icons/datainsight.png', 'https://datainsight.ai', '{"views": 9876, "reviews": 67}', 'dcda41c5-34cd-44d7-90e3-7c5ca2ab4e87', 4, NOW(), NOW()),
  ('LearnAI', 'Master AI and machine learning', 'LearnAI is an educational platform that helps people learn about AI and machine learning through interactive courses and projects. It adapts to your learning style and pace.', 'LearnAI provides personalized learning paths based on your goals and experience level. It includes interactive exercises, real-world projects, and feedback from AI tutors.', 'https://example.com/icons/learnai.png', 'https://learnai.edu', '{"views": 11234, "reviews": 78}', 'dcda41c5-34cd-44d7-90e3-7c5ca2ab4e87', 5, NOW(), NOW());

-- Reviews
INSERT INTO public.reviews (product_id, profile_id, rating, comment, created_at, updated_at)
VALUES 
  (1, 'dcda41c5-34cd-44d7-90e3-7c5ca2ab4e87', 5, 'CodeGenius has completely transformed my development workflow. The AI suggestions are incredibly accurate and have helped me write cleaner code faster.', NOW(), NOW()),
  (2, 'dcda41c5-34cd-44d7-90e3-7c5ca2ab4e87', 4, 'Great tool for code generation, but sometimes the suggestions are a bit too generic. Still, it saves me a lot of time.', NOW(), NOW()),
  (3, 'dcda41c5-34cd-44d7-90e3-7c5ca2ab4e87', 5, 'DesignMind is a game-changer for UI/UX design. The AI understands design principles and provides valuable feedback.', NOW(), NOW()),
  (4, 'dcda41c5-34cd-44d7-90e3-7c5ca2ab4e87', 4, 'ContentForge helps me create content quickly, but I always review and edit the output to ensure it matches my brand voice.', NOW(), NOW()),
  (5, 'dcda41c5-34cd-44d7-90e3-7c5ca2ab4e87', 5, 'DataInsight has helped us make data-driven decisions faster than ever. The visualizations are beautiful and the insights are valuable.', NOW(), NOW());

-- Product Upvotes
INSERT INTO public.product_upvotes (product_id, profile_id)
VALUES 
  (1, 'dcda41c5-34cd-44d7-90e3-7c5ca2ab4e87'),
  (2, 'dcda41c5-34cd-44d7-90e3-7c5ca2ab4e87'),
  (3, 'dcda41c5-34cd-44d7-90e3-7c5ca2ab4e87'),
  (4, 'dcda41c5-34cd-44d7-90e3-7c5ca2ab4e87'),
  (5, 'dcda41c5-34cd-44d7-90e3-7c5ca2ab4e87');

-- Follows
INSERT INTO public.follows (follower_id, following_id, created_at)
VALUES 
  ('dcda41c5-34cd-44d7-90e3-7c5ca2ab4e87', 'dcda41c5-34cd-44d7-90e3-7c5ca2ab4e87', NOW()),
  ('dcda41c5-34cd-44d7-90e3-7c5ca2ab4e87', 'dcda41c5-34cd-44d7-90e3-7c5ca2ab4e87', NOW()),
  ('dcda41c5-34cd-44d7-90e3-7c5ca2ab4e87', 'dcda41c5-34cd-44d7-90e3-7c5ca2ab4e87', NOW()),
  ('dcda41c5-34cd-44d7-90e3-7c5ca2ab4e87', 'dcda41c5-34cd-44d7-90e3-7c5ca2ab4e87', NOW()),
  ('dcda41c5-34cd-44d7-90e3-7c5ca2ab4e87', 'dcda41c5-34cd-44d7-90e3-7c5ca2ab4e87', NOW());

-- Topics
INSERT INTO public.topics (topic, slug, created_at)
VALUES 
  ('Artificial Intelligence', 'artificial-intelligence', NOW()),
  ('Machine Learning', 'machine-learning', NOW()),
  ('Natural Language Processing', 'natural-language-processing', NOW()),
  ('Computer Vision', 'computer-vision', NOW()),
  ('AI Ethics', 'ai-ethics', NOW());

-- Posts
INSERT INTO public.posts (title, content, topic_id, profile_id, created_at, updated_at)
VALUES 
  ('The Future of AI in Software Development', 'AI is transforming how we write code. From automated testing to code generation, AI tools are becoming an essential part of the developer toolkit. In this post, I explore the latest trends and share my predictions for the future.', 1, 'dcda41c5-34cd-44d7-90e3-7c5ca2ab4e87', NOW(), NOW()),
  ('Designing for AI: A New Paradigm', 'Designing interfaces for AI systems requires a different approach than traditional UI design. We need to consider how users interact with AI, handle uncertainty, and provide feedback. Here are my thoughts on the emerging field of AI design.', 1, 'dcda41c5-34cd-44d7-90e3-7c5ca2ab4e87', NOW(), NOW()),
  ('How to Choose the Right AI Model for Your Project', 'With so many AI models available, it can be overwhelming to choose the right one for your project. In this post, I break down the key factors to consider and provide a framework for making this decision.', 2, 'dcda41c5-34cd-44d7-90e3-7c5ca2ab4e87', NOW(), NOW()),
  ('The Ethics of AI: A Developer''s Perspective', 'As AI systems become more powerful, we need to consider the ethical implications of our work. How can we ensure our AI systems are fair, transparent, and aligned with human values? I share my thoughts on this important topic.', 5, 'dcda41c5-34cd-44d7-90e3-7c5ca2ab4e87', NOW(), NOW()),
  ('Building an AI Product from Idea to Launch', 'Launching an AI product requires a unique approach compared to traditional software. In this post, I share my experience building AI products and provide a roadmap for success.', 1, 'dcda41c5-34cd-44d7-90e3-7c5ca2ab4e87', NOW(), NOW());

-- Post Upvotes
INSERT INTO public.post_upvotes (post_id, profile_id, created_at)
VALUES 
  (1, 'dcda41c5-34cd-44d7-90e3-7c5ca2ab4e87', NOW()),
  (2, 'dcda41c5-34cd-44d7-90e3-7c5ca2ab4e87', NOW()),
  (3, 'dcda41c5-34cd-44d7-90e3-7c5ca2ab4e87', NOW()),
  (4, 'dcda41c5-34cd-44d7-90e3-7c5ca2ab4e87', NOW()),
  (5, 'dcda41c5-34cd-44d7-90e3-7c5ca2ab4e87', NOW());

-- Post Replies
INSERT INTO public.post_replies (post_id, profile_id, reply, parent_id, created_at, updated_at)
VALUES 
  (1, 'dcda41c5-34cd-44d7-90e3-7c5ca2ab4e87', 'Great insights! I''ve been using AI code assistants for a while now, and they''ve definitely improved my productivity. Do you have any specific tools you recommend?', NULL, NOW(), NOW()),
  (1, 'dcda41c5-34cd-44d7-90e3-7c5ca2ab4e87', 'Thanks! I''ve had good experiences with CodeGenius and GitHub Copilot. Both have different strengths, but they complement each other well.', 1, NOW(), NOW()),
  (2, 'dcda41c5-34cd-44d7-90e3-7c5ca2ab4e87', 'This is a fascinating perspective on AI design. I''d love to see more examples of how you''ve implemented these principles in your work.', NULL, NOW(), NOW()),
  (3, 'dcda41c5-34cd-44d7-90e3-7c5ca2ab4e87', 'I found this framework really helpful for my recent project. It helped me narrow down the options and choose the right model for my use case.', NULL, NOW(), NOW()),
  (4, 'dcda41c5-34cd-44d7-90e3-7c5ca2ab4e87', 'Ethics in AI is such an important topic. I think we need more discussions like this in the developer community.', NULL, NOW(), NOW());

-- Ideas
INSERT INTO public.ideas (idea, views, claimed_at, claimed_by, created_at)
VALUES 
  ('An AI-powered code review tool that not only checks for bugs but also suggests architectural improvements', 234, NOW(), 'dcda41c5-34cd-44d7-90e3-7c5ca2ab4e87', NOW()),
  ('A platform that helps non-technical people create AI models without coding', 567, NOW(), 'dcda41c5-34cd-44d7-90e3-7c5ca2ab4e87', NOW()),
  ('An AI assistant that helps designers create accessible interfaces by automatically checking for WCAG compliance', 345, NULL, NULL, NOW()),
  ('A tool that uses AI to optimize database queries and improve application performance', 123, NOW(), 'dcda41c5-34cd-44d7-90e3-7c5ca2ab4e87', NOW()),
  ('An AI-powered content moderation system that can detect and filter harmful content across multiple languages', 789, NULL, NULL, NOW());

-- Ideas Likes
INSERT INTO public.ideas_likes (idea_id, profile_id, created_at)
VALUES 
  (1, 'dcda41c5-34cd-44d7-90e3-7c5ca2ab4e87', NOW()),
  (2, 'dcda41c5-34cd-44d7-90e3-7c5ca2ab4e87', NOW()),
  (3, 'dcda41c5-34cd-44d7-90e3-7c5ca2ab4e87', NOW()),
  (4, 'dcda41c5-34cd-44d7-90e3-7c5ca2ab4e87', NOW()),
  (5, 'dcda41c5-34cd-44d7-90e3-7c5ca2ab4e87', NOW());

-- Teams
INSERT INTO public.teams (product_name, product_description, team_size, equity_split, product_url, product_stage, roles, created_at, updated_at)
VALUES 
  ('AI Code Assistant', 'An intelligent code assistant that helps developers write better code faster', 5, 20, 'https://aicodeassistant.com', 'mvp', 'Full-stack developer, ML engineer, UI/UX designer, Product manager, Marketing specialist', NOW(), NOW()),
  ('Design AI', 'AI-powered design tool that helps create beautiful interfaces', 3, 33, 'https://designai.io', 'prototype', 'UI/UX designer, Frontend developer, AI researcher', NOW(), NOW()),
  ('Content AI', 'AI platform for generating high-quality content for various platforms', 4, 25, 'https://contentai.app', 'idea', 'Backend developer, NLP specialist, Content strategist, UI designer', NOW(), NOW()),
  ('Data Insight AI', 'AI analytics platform that transforms data into actionable insights', 6, 16, 'https://datainsightai.com', 'product', 'Data scientist, Backend developer, Frontend developer, UI/UX designer, Product manager, Marketing specialist', NOW(), NOW()),
  ('Learn AI Platform', 'Educational platform for learning AI and machine learning', 4, 25, 'https://learnai.edu', 'mvp', 'Full-stack developer, ML educator, UI/UX designer, Content creator', NOW(), NOW());

-- Jobs
INSERT INTO public.jobs (position, overview, responsability, qualifications, benefits, skills, company_name, company_url, location, apply_url, job_type, job_location, salary_range, created_at, updated_at)
VALUES 
  ('Senior AI Engineer', 'Join our team to build cutting-edge AI products that transform industries', 'Lead AI development efforts, mentor junior engineers, and contribute to product strategy', '5+ years of experience in AI/ML, strong Python skills, experience with deep learning frameworks', 'Competitive salary, remote work, health insurance, 401k matching, professional development', 'Python, TensorFlow, PyTorch, AWS, Docker, Kubernetes', 'AI Innovations Inc', 'https://aiinnovations.com', 'San Francisco, CA', 'https://aiinnovations.com/careers', 'full-time', 'hybrid', '$150,000 - $200,000', NOW(), NOW()),
  ('AI Product Manager', 'Help shape the future of AI products as a product manager', 'Define product strategy, work with engineering and design teams, analyze user feedback', '3+ years of product management experience, background in AI/ML, strong analytical skills', 'Competitive salary, stock options, flexible hours, health insurance', 'Product strategy, data analysis, user research, agile methodologies', 'TechAI Solutions', 'https://techaisolutions.com', 'New York, NY', 'https://techaisolutions.com/jobs', 'full-time', 'on-site', '$120,000 - $150,000', NOW(), NOW()),
  ('AI UI/UX Designer', 'Create beautiful and intuitive interfaces for AI products', 'Design user interfaces for AI applications, conduct user research, create prototypes', '3+ years of UI/UX design experience, portfolio of AI/ML products, proficiency in design tools', 'Competitive salary, remote work, health insurance, professional development', 'Figma, Sketch, Adobe XD, user research, prototyping', 'DesignAI Studio', 'https://designaistudio.com', 'Remote', 'https://designaistudio.com/careers', 'full-time', 'remote', '$100,000 - $130,000', NOW(), NOW()),
  ('AI Content Writer', 'Create engaging content about AI and technology', 'Write blog posts, whitepapers, and case studies about AI products and trends', '2+ years of content writing experience, knowledge of AI/ML concepts, strong writing skills', 'Competitive salary, flexible hours, remote work, health insurance', 'Content writing, SEO, research, AI/ML knowledge', 'ContentAI Media', 'https://contentaimedia.com', 'Remote', 'https://contentaimedia.com/jobs', 'part-time', 'remote', '$50,000 - $100,000', NOW(), NOW()),
  ('AI Research Intern', 'Gain hands-on experience in AI research and development', 'Assist with AI research projects, implement algorithms, analyze results', 'Currently pursuing a degree in Computer Science or related field, knowledge of Python, interest in AI', 'Competitive stipend, mentorship, flexible hours, potential for full-time offer', 'Python, machine learning, data analysis, research', 'AI Research Lab', 'https://airesearchlab.org', 'Boston, MA', 'https://airesearchlab.org/internships', 'internship', 'on-site', 'less-than-50000', NOW(), NOW());

-- Message Rooms
INSERT INTO public.message_rooms (message_room_id, created_at)
VALUES 
  (1, NOW()),
  (2, NOW()),
  (3, NOW()),
  (4, NOW()),
  (5, NOW());

-- Message Room Members
INSERT INTO public.message_room_members (message_room_id, profile_id, created_at)
VALUES 
  (1, 'dcda41c5-34cd-44d7-90e3-7c5ca2ab4e87', NOW()),
  (2, 'dcda41c5-34cd-44d7-90e3-7c5ca2ab4e87', NOW()),
  (3, 'dcda41c5-34cd-44d7-90e3-7c5ca2ab4e87', NOW()),
  (4, 'dcda41c5-34cd-44d7-90e3-7c5ca2ab4e87', NOW()),
  (5, 'dcda41c5-34cd-44d7-90e3-7c5ca2ab4e87', NOW());

-- Messages
INSERT INTO public.messages (message_room_id, sender_id, content, seen, created_at)
VALUES 
  (1, 'dcda41c5-34cd-44d7-90e3-7c5ca2ab4e87', 'Hey there! I saw your design for the AI interface. It looks amazing!', true, NOW()),
  (2, 'dcda41c5-34cd-44d7-90e3-7c5ca2ab4e87', 'Hi! I''d love to collaborate on an AI project. Are you interested?', true, NOW()),
  (3, 'dcda41c5-34cd-44d7-90e3-7c5ca2ab4e87', 'Your post on AI ethics was really thought-provoking. Would you be interested in doing a podcast on the topic?', false, NOW()),
  (4, 'dcda41c5-34cd-44d7-90e3-7c5ca2ab4e87', 'Hey! I''m organizing an AI meetup next month. Would you be interested in speaking?', true, NOW()),
  (5, 'dcda41c5-34cd-44d7-90e3-7c5ca2ab4e87', 'I saw you''re working on a new AI design tool. How''s it going?', false, NOW());

-- Notifications
INSERT INTO public.notifications (source_id, product_id, post_id, target_id, type, created_at)
VALUES 
  ('dcda41c5-34cd-44d7-90e3-7c5ca2ab4e87', NULL, NULL, 'dcda41c5-34cd-44d7-90e3-7c5ca2ab4e87', 'follow', NOW()),
  ('dcda41c5-34cd-44d7-90e3-7c5ca2ab4e87', NULL, NULL, 'dcda41c5-34cd-44d7-90e3-7c5ca2ab4e87', 'follow', NOW()),
  (NULL, 1, NULL, 'dcda41c5-34cd-44d7-90e3-7c5ca2ab4e87', 'review', NOW()),
  (NULL, NULL, 1, 'dcda41c5-34cd-44d7-90e3-7c5ca2ab4e87', 'reply', NOW()),
  ('dcda41c5-34cd-44d7-90e3-7c5ca2ab4e87', NULL, NULL, 'dcda41c5-34cd-44d7-90e3-7c5ca2ab4e87', 'mention', NOW()); 