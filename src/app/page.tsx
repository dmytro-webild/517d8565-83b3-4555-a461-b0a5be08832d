"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleCentered from '@/components/navbar/NavbarStyleCentered/NavbarStyleCentered';
import HeroSplitTestimonial from '@/components/sections/hero/HeroSplitTestimonial';
import MediaAbout from '@/components/sections/about/MediaAbout';
import FeatureHoverPattern from '@/components/sections/feature/featureHoverPattern/FeatureHoverPattern';
import PricingCardNine from '@/components/sections/pricing/PricingCardNine';
import TestimonialCardFifteen from '@/components/sections/testimonial/TestimonialCardFifteen';
import FaqSplitMedia from '@/components/sections/faq/FaqSplitMedia';
import ContactCenter from '@/components/sections/contact/ContactCenter';
import FooterCard from '@/components/sections/footer/FooterCard';
import { Sparkles, Zap, Wand2, Image, Layers, Tag, Download, Copy, CreditCard, Mail, Twitter, Linkedin, Github, Instagram } from 'lucide-react';

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="shift-hover"
      defaultTextAnimation="background-highlight"
      borderRadius="soft"
      contentWidth="smallMedium"
      sizing="largeSmallSizeMediumTitles"
      background="circleGradient"
      cardStyle="solid"
      primaryButtonStyle="shadow"
      secondaryButtonStyle="radial-glow"
      headingFontWeight="medium"
    >
      <div id="nav" data-section="nav">
        <NavbarStyleCentered
          brandName="AI Sticker Generator"
          navItems={[
            { name: "Features", id: "features" },
            { name: "How It Works", id: "about" },
            { name: "Pricing", id: "pricing" },
            { name: "FAQ", id: "faq" },
            { name: "Contact", id: "contact" }
          ]}
          button={{
            text: "Start Generating",            href: "#"
          }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroSplitTestimonial
          title="Generate Sticker Designs in Seconds"
          description="Turn your ideas into professional, print-ready stickers optimized for Redbubble, TeePublic, and other print-on-demand platforms. Our AI creates high-resolution designs with transparent backgrounds and white outlines—ready to sell."
          tag="AI-Powered"
          tagIcon={Sparkles}
          tagAnimation="slide-up"
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AobkntgHMmn9iuOKeo86TA9l2k/a-vibrant-showcase-of-diverse-sticker-de-1773263203825-18aa3337.png"
          imageAlt="Diverse sticker design collection"
          imagePosition="right"
          mediaAnimation="slide-up"
          testimonials={[
            {
              name: "Sarah Chen",              handle: "Print Shop Owner",              testimonial: "This tool saved me hours every week. I went from 5 designs per day to 50+. My Redbubble sales tripled!",              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AobkntgHMmn9iuOKeo86TA9l2k/professional-avatar-photo-of-a-young-cre-1773263202653-97afca74.png"
            },
            {
              name: "Marcus Johnson",              handle: "Freelance Designer",              testimonial: "The AI enhancement is incredible. My clients can't believe how fast I deliver now. Best investment ever.",              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AobkntgHMmn9iuOKeo86TA9l2k/professional-avatar-of-a-diverse-entrepr-1773263202241-77be6724.png"
            },
            {
              name: "Elena Rodriguez",              handle: "Shopify Store Owner",              testimonial: "From prompt to print-ready in under a minute. The SEO tags alone save me 10+ minutes per product.",              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AobkntgHMmn9iuOKeo86TA9l2k/creative-professional-avatar-showing-art-1773263203230-13f5fa3c.png"
            }
          ]}
          testimonialRotationInterval={5000}
          buttons={[
            { text: "Try For Free", href: "#" },
            { text: "View Demo", href: "#" }
          ]}
          buttonAnimation="slide-up"
          background={{ variant: "glowing-orb" }}
          useInvertedBackground={false}
        />
      </div>

      <div id="features" data-section="features">
        <FeatureHoverPattern
          title="Everything You Need to Succeed"
          description="Powerful features designed to streamline your sticker creation workflow and maximize your print-on-demand success."
          tag="Powerful Tools"
          tagIcon={Zap}
          tagAnimation="slide-up"
          features={[
            {
              icon: Layers,
              title: "Print-Ready Output",              description: "Get 3000x3000 PNG files with transparent backgrounds, white outlines, and 300 DPI quality certified for professional printing."
            },
            {
              icon: Wand2,
              title: "AI Prompt Enhancement",              description: "Enter a simple idea like 'cute cat' and our AI transforms it into detailed design prompts optimized for quality sticker generation."
            },
            {
              icon: Tag,
              title: "Auto SEO Generation",              description: "Instantly generate optimized titles, 15 SEO tags, and descriptions tailored for Redbubble, TeePublic, and other marketplaces."
            },
            {
              icon: Image,
              title: "Multi-Style Generation",              description: "Create 4-8 unique designs in different styles: cute, anime, minimal, cartoon, typography, and meme—all from one prompt."
            },
            {
              icon: Download,
              title: "Bulk Download",              description: "Download individual stickers or entire collections as ZIP files. One-click access to all your generated designs."
            },
            {
              icon: Copy,
              title: "Marketplace Integration",              description: "Copy optimized titles, tags, and descriptions directly to your clipboard for instant marketplace listing creation."
            }
          ]}
          animationType="slide-up"
          textboxLayout="default"
          useInvertedBackground={true}
        />
      </div>

      <div id="about" data-section="about">
        <MediaAbout
          title="How It Works"
          description="Three simple steps from idea to print-ready sticker. No design skills required."
          tag="The Process"
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AobkntgHMmn9iuOKeo86TA9l2k/visual-representation-of-the-ai-sticker--1773263202912-de80f457.png"
          imageAlt="AI sticker generation workflow"
          buttons={[
            { text: "Start Creating", href: "#" }
          ]}
          buttonAnimation="slide-up"
          useInvertedBackground={false}
        />
      </div>

      <div id="pricing" data-section="pricing">
        <PricingCardNine
          title="Flexible Plans for Every Creator"
          description="Start free, scale as you grow. No credit card required for the free tier."
          tag="Freemium Model"
          tagIcon={CreditCard}
          tagAnimation="slide-up"
          textboxLayout="default"
          animationType="slide-up"
          useInvertedBackground={true}
          plans={[
            {
              id: "free",              title: "Starter",              price: "$0",              period: "/month",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AobkntgHMmn9iuOKeo86TA9l2k/modern-ai-interface-showing-a-text-promp-1773263203166-5cc997fd.png",              imageAlt: "AI Generation Interface",              button: { text: "Get Started", href: "#" },
              features: [
                "Up to 10 sticker designs per day",                "4 different style options",                "Standard resolution (2000x2000)",                "Basic SEO tag generation",                "Single download at a time"
              ]
            },
            {
              id: "pro",              title: "Professional",              price: "$29",              period: "/month",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AobkntgHMmn9iuOKeo86TA9l2k/high-resolution-sticker-export-display-s-1773263203493-34ceacdd.png",              imageAlt: "High Quality Export",              button: { text: "Choose Plan", href: "#" },
              features: [
                "Unlimited sticker designs",                "8 style variations per prompt",                "High resolution (3000x3000)",                "Advanced AI enhancement",                "Optimized SEO tags for marketplaces",                "Bulk ZIP downloads",                "Priority processing"
              ]
            },
            {
              id: "studio",              title: "Studio",              price: "$99",              period: "/month",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AobkntgHMmn9iuOKeo86TA9l2k/bulk-download-feature-visualization-show-1773263203542-2c3a224a.png",              imageAlt: "Batch Download Operations",              button: { text: "Choose Plan", href: "#" },
              features: [
                "Unlimited everything",                "12 style variations",                "Commercial license included",                "API access for automation",                "Batch processing (100+ at once)",                "Brand kit customization",                "Dedicated support",                "White-label options"
              ]
            }
          ]}
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardFifteen
          testimonial="The AI Sticker Generator completely transformed my business. I went from making 5 designs a day manually to generating 200+ variations. My Redbubble revenue increased 10x in just two months. The SEO optimization alone saves me hours of tedious tagging work."
          rating={5}
          author="Alex Thompson, Print-On-Demand Entrepreneur"
          avatars={[
            { src: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AobkntgHMmn9iuOKeo86TA9l2k/professional-avatar-photo-of-a-young-cre-1773263202653-97afca74.png", alt: "Creator 1" },
            { src: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AobkntgHMmn9iuOKeo86TA9l2k/professional-avatar-of-a-diverse-entrepr-1773263202241-77be6724.png", alt: "Creator 2" },
            { src: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AobkntgHMmn9iuOKeo86TA9l2k/creative-professional-avatar-showing-art-1773263203230-13f5fa3c.png", alt: "Creator 3" },
            { src: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AobkntgHMmn9iuOKeo86TA9l2k/professional-business-avatar-of-someone--1773263203118-ac53d73a.png", alt: "Creator 4" }
          ]}
          ratingAnimation="slide-up"
          avatarsAnimation="slide-up"
          useInvertedBackground={false}
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqSplitMedia
          title="Frequently Asked Questions"
          description="Everything you need to know about creating and selling stickers with AI Sticker Generator."
          tag="Help & Support"
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AobkntgHMmn9iuOKeo86TA9l2k/visual-comparison-showing-low-resolution-1773263203788-1d348f3c.png"
          imageAlt="Sticker quality comparison"
          mediaPosition="left"
          mediaAnimation="slide-up"
          faqsAnimation="slide-up"
          textboxLayout="default"
          useInvertedBackground={true}
          faqs={[
            {
              id: "1",              title: "Can I use these stickers commercially?",              content: "Yes! Free tier designs are for personal use. Pro and Studio plans include full commercial licenses. Studio plan includes white-label options for reselling designs."
            },
            {
              id: "2",              title: "What file formats do you support?",              content: "We generate PNG files with transparent backgrounds optimized for print-on-demand platforms. All files are 300 DPI and ready for Redbubble, TeePublic, Etsy, Shopify, and more."
            },
            {
              id: "3",              title: "How is the quality guaranteed?",              content: "Every sticker is generated at 3000x3000 resolution with professional white outline processing. We use advanced AI models specifically trained for print-ready design quality."
            },
            {
              id: "4",              title: "Can I customize the generated designs?",              content: "Absolutely. Export your designs and use any image editor. Our files maintain quality at any size, making them perfect for further customization."
            },
            {
              id: "5",              title: "How often can I generate stickers?",              content: "Free tier: 10 designs daily. Pro: unlimited. Studio: unlimited with batch processing for 100+ designs at once."
            },
            {
              id: "6",              title: "Is there a trial period?",              content: "Yes! Start with our free tier—no credit card required. Access core features and generate 10 stickers daily to experience the platform."
            }
          ]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactCenter
          tag="Newsletter"
          title="Stay Updated with AI Design Trends"
          description="Get weekly tips on sticker design, marketplace optimization, and print-on-demand success strategies delivered to your inbox."
          tagIcon={Mail}
          tagAnimation="slide-up"
          inputPlaceholder="your@email.com"
          buttonText="Subscribe"
          termsText="We respect your privacy. Unsubscribe anytime. No spam, just valuable insights."
          background={{ variant: "plain" }}
          useInvertedBackground={false}
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterCard
          logoText="AI Sticker Generator"
          copyrightText="© 2025 AI Sticker Generator. All rights reserved."
          socialLinks={[
            { icon: Twitter, href: "https://twitter.com", ariaLabel: "Twitter" },
            { icon: Linkedin, href: "https://linkedin.com", ariaLabel: "LinkedIn" },
            { icon: Github, href: "https://github.com", ariaLabel: "GitHub" },
            { icon: Instagram, href: "https://instagram.com", ariaLabel: "Instagram" }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}