import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Send } from 'lucide-react';

export function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-purple-400 font-serif">
          Get In Touch
        </h2>
        <div className="max-w-2xl mx-auto">
          <form
            action="https://formspree.io/f/mleagwej"
            method="POST"
            className="space-y-6"
          >
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-300 mb-1"
              >
                Name
              </label>
              <Input
                id="name"
                name="name"
                required
                placeholder="Your Name"
                className="bg-gray-800 border-gray-700 text-white"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-300 mb-1"
              >
                Email
              </label>
              <Input
                id="email"
                name="email"
                type="email"
                required
                placeholder="your@email.com"
                className="bg-gray-800 border-gray-700 text-white"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-300 mb-1"
              >
                Message
              </label>
              <Textarea
                id="message"
                required
                name="message" // This is the field name that Formspree expects
                placeholder="Your message here..."
                className="h-32 bg-gray-800 border-gray-700 text-white"
              />
            </div>
            <Button
              type="submit"
              size="lg"
              className="w-full bg-purple-600 hover:bg-purple-700 text-white"
            >
              Send Message
              <Send className="ml-2 h-5 w-5" />
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}
