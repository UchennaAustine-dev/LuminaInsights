import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const NewsletterSection = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 bg-gray-50 rounded-xl my-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        <div>
          <span className="text-emerald-600 font-medium text-sm uppercase tracking-wider">
            Stay Connected
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
            Join Our Newsletter
          </h2>
          <p className="text-gray-600">
            Get the latest insights, articles, and updates delivered directly to
            your inbox. We send thoughtfully curated content that keeps you
            informed and inspired.
          </p>

          <form className="mt-6 flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex h-12 w-full rounded-md border border-gray-200 bg-white px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
              required
            />
            <Button className="h-12 bg-emerald-600 hover:bg-emerald-700 text-white">
              Subscribe
            </Button>
          </form>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <Card>
            <CardContent className="pt-6">
              <div className="text-4xl font-bold text-emerald-600 mb-2">
                10k+
              </div>
              <p className="text-sm text-gray-600">Subscribers</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="text-4xl font-bold text-emerald-600 mb-2">
                120+
              </div>
              <p className="text-sm text-gray-600">Articles</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="text-4xl font-bold text-emerald-600 mb-2">
                15+
              </div>
              <p className="text-sm text-gray-600">Expert Writers</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="text-4xl font-bold text-emerald-600 mb-2">
                4.9★
              </div>
              <p className="text-sm text-gray-600">Average Rating</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;
