import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const ReceiptPage = () => {
  return (
    <main className="relative bg-background text-foreground min-h-screen flex flex-col">
      <Header />
      <div className="flex-grow container mx-auto px-4 py-16 flex items-center justify-center">
        <h1 className="text-4xl font-bold text-center">Receipt Details</h1>
      </div>
      <Footer />
    </main>
  );
};

export default ReceiptPage;
