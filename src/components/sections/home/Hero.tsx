'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, CheckCircle, Zap, Globe } from 'lucide-react';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { useSmartNavigation } from '@/hooks/useSmartNavigation';

const DEFAULT_HERO = {
  title: 'Clean Web Solutions That Drive Results',
  subtitle:
    'Professional web development made simple and accessible. We deliver streamlined, modern websites that connect your business to success online.',
  ctaText: 'Start Your Project',
  ctaHref: '/contact',
  secondaryCtaText: 'View Our Work',
  secondaryCtaHref: '/portfolio',
  features: ['Modern & Responsive Design', 'Optimized Performance', 'Strategic User Experience'],
  trustBadge: 'Trusted by 100+ Businesses',
  backgroundImageUrl:
    'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop',
  backgroundImageAlt: 'Digital technology background',
} as const;

type HeroProps = Partial<typeof DEFAULT_HERO>;

export default function Hero(props: HeroProps) {
  const config = { ...DEFAULT_HERO, ...props };
  const navigate = useSmartNavigation();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handlePrimaryClick = () => {
    navigate(config.ctaHref);
  };

  const handleSecondaryClick = () => {
    navigate(config.secondaryCtaHref);
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen bg-background text-foreground overflow-hidden"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src={config.backgroundImageUrl}
          alt={config.backgroundImageAlt}
          fill
          className="object-cover opacity-5"
          data-editable-src="backgroundImageUrl"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-br from-background/95 via-background/90 to-background/95" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-32">
        <div className="flex flex-col items-center text-center max-w-5xl mx-auto">
          {/* Trust Badge */}
          <div
            className={`mb-6 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
          >
            <Badge
              variant="secondary"
              className="bg-muted text-muted-foreground px-4 py-2 text-sm font-medium"
            >
              <CheckCircle className="w-4 h-4 mr-2 text-primary" />
              <span data-editable="trustBadge">{config.trustBadge}</span>
            </Badge>
          </div>

          {/* Main Heading */}
          <div
            className={`mb-6 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
          >
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight leading-tight">
              <span
                data-editable="title"
                className="bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent"
              >
                {config.title}
              </span>
            </h1>
          </div>

          {/* Subtitle */}
          <div
            className={`mb-10 transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
          >
            <p className="text-lg sm:text-xl lg:text-2xl text-muted-foreground max-w-3xl leading-relaxed">
              <span data-editable="subtitle">{config.subtitle}</span>
            </p>
          </div>

          {/* Feature List */}
          <div
            className={`mb-10 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
          >
            <div className="flex flex-wrap justify-center gap-6 sm:gap-8">
              {config.features.map((feature, idx) => (
                <div
                  key={idx}
                  className="flex items-center text-sm sm:text-base text-muted-foreground"
                >
                  <Zap className="w-4 h-4 mr-2 text-primary flex-shrink-0" />
                  <span data-editable={`features[${idx}]`}>{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Buttons */}
          <div
            className={`flex flex-col sm:flex-row gap-4 transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
          >
            <Button
              onClick={handlePrimaryClick}
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-6 text-lg font-semibold group transition-all duration-300"
              data-editable-href="ctaHref"
              data-href={config.ctaHref}
            >
              <span data-editable="ctaText">{config.ctaText}</span>
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>

            <Button
              onClick={handleSecondaryClick}
              variant="outline"
              size="lg"
              className="border-border text-foreground hover:bg-accent hover:text-accent-foreground px-8 py-6 text-lg font-semibold group transition-all duration-300"
              data-editable-href="secondaryCtaHref"
              data-href={config.secondaryCtaHref}
            >
              <Globe className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform duration-300" />
              <span data-editable="secondaryCtaText">{config.secondaryCtaText}</span>
            </Button>
          </div>
        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10" />
    </section>
  );
}
