import React from 'react';
import Card from '../Card/Card';
import Button from '../Button/Button';

const galleryItems = [
    {
        imageUrl: 'https://images.unsplash.com/photo-1534796636912-3b95b3ab5986?q=80&w=800&auto=format&fit=crop',
        title: 'The Glitch',
        subtitle: 'Limited Series',
    },
];

export const ImmersiveContentGallery: React.FC = () => {
  return (
    <div>
        <h2 className="text-2xl font-bold text-text-primary mb-4">Featured Content</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {galleryItems.map((item) => (
                <Card key={item.title} imageUrl={item.imageUrl} title={item.title} subtitle={item.subtitle}>
                     <Button label="Play" variant="primary" className="py-1.5 w-full" />
                </Card>
            ))}
        </div>
    </div>
  );
};
