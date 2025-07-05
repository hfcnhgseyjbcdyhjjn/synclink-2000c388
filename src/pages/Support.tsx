
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { useForm } from 'react-hook-form';
import { toast } from '@/hooks/use-toast';
import Navigation from '@/components/Navigation';
import { Sparkles, MessageSquare, Users, ArrowRight } from 'lucide-react';

interface SupportFormData {
  username: string;
  problem: string;
}

const Support = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const form = useForm<SupportFormData>({
    defaultValues: {
      username: '',
      problem: '',
    },
  });

  const onSubmit = async (data: SupportFormData) => {
    setIsSubmitting(true);
    console.log('Support request submitted:', data);

    // Simulate form submission without webhook
    setTimeout(() => {
      toast({
        title: "Support Request Received",
        description: "Your support request has been recorded. Please join our Discord server for assistance.",
      });
      form.reset();
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-blue-500/10 to-cyan-500/10 animate-gradient-shift bg-[length:200%_200%]"></div>
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
      
      <Navigation />
      <div className="pt-24 pb-16 px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 space-y-6">
            <div className="inline-flex items-center px-4 py-2 bg-purple-500/10 border border-purple-500/20 rounded-full text-purple-300 text-sm font-medium backdrop-blur-sm">
              <Sparkles className="w-4 h-4 mr-2" />
              24/7 Support Available
            </div>
            <h1 className="text-5xl font-display font-bold text-white">
              SyncLink <span className="text-transparent bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text">Support Center</span>
            </h1>
            <p className="text-slate-300 text-xl font-light max-w-2xl mx-auto">
              Need assistance? Our expert team is here to help you get the most out of SyncLink. 
              Submit a support request and join our vibrant Discord community for instant help.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Support Form */}
            <Card className="bg-slate-900/50 backdrop-blur-sm border-slate-800/50 hover:border-purple-500/50 transition-all duration-300">
              <CardHeader className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-lg">
                    <MessageSquare className="w-6 h-6 text-purple-400" />
                  </div>
                  <CardTitle className="text-white font-display text-2xl">Submit Support Request</CardTitle>
                </div>
                <CardDescription className="text-slate-400 text-base">
                  Describe your issue in detail and we'll help you resolve it quickly. Our team typically responds within 2-4 hours.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <FormField
                      control={form.control}
                      name="username"
                      rules={{ required: "Username is required" }}
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-white font-medium">Discord Username</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Enter your Discord username"
                              className="bg-slate-800/50 border-slate-700/50 text-white placeholder:text-slate-500 focus:border-purple-500/50 rounded-xl"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="problem"
                      rules={{ 
                        required: "Problem description is required",
                        minLength: { value: 10, message: "Please provide more details (at least 10 characters)" }
                      }}
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-white font-medium">Issue Description</FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="Describe the issue you're experiencing in detail..."
                              className="bg-slate-800/50 border-slate-700/50 text-white placeholder:text-slate-500 focus:border-purple-500/50 min-h-32 rounded-xl"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold py-3 rounded-xl transform hover:scale-105 transition-all duration-300"
                    >
                      {isSubmitting ? 'Submitting...' : 'Submit Support Request'}
                    </Button>
                  </form>
                </Form>
              </CardContent>
            </Card>

            {/* Community Card */}
            <div className="space-y-6">
              <Card className="bg-gradient-to-br from-blue-900/30 to-purple-900/30 backdrop-blur-sm border-blue-500/30 hover:border-blue-400/50 transition-all duration-300">
                <CardHeader className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-lg">
                      <Users className="w-6 h-6 text-blue-400" />
                    </div>
                    <CardTitle className="text-white font-display text-2xl">Join Our Community</CardTitle>
                  </div>
                  <CardDescription className="text-slate-300 text-base">
                    Get instant help from our community of experts and fellow SyncLink users. Share tips, get updates, and connect with other league managers.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-center text-slate-300 text-sm">
                      <span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
                      <span>5,000+ Active Members</span>
                    </div>
                    <div className="flex items-center text-slate-300 text-sm">
                      <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                      <span>24/7 Community Support</span>
                    </div>
                    <div className="flex items-center text-slate-300 text-sm">
                      <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                      <span>Regular Updates & News</span>
                    </div>
                  </div>
                  <a 
                    href="https://discord.gg/rosterflow" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="block"
                  >
                    <Button className="w-full bg-[#5865F2] hover:bg-[#4752C4] text-white font-semibold py-3 rounded-xl transform hover:scale-105 transition-all duration-300 group">
                      <Users className="w-5 h-5 mr-2" />
                      Join SyncLink Discord
                      <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </a>
                </CardContent>
              </Card>

              {/* Quick Help Card */}
              <Card className="bg-slate-900/50 backdrop-blur-sm border-slate-800/50">
                <CardHeader>
                  <CardTitle className="text-white font-display">Quick Help</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="text-sm text-slate-400">
                    <strong className="text-white">Common Issues:</strong>
                    <ul className="mt-2 space-y-1 ml-4">
                      <li>• Bot permissions and setup</li>
                      <li>• Command not working</li>
                      <li>• League configuration</li>
                      <li>• Player management issues</li>
                    </ul>
                  </div>
                  <div className="text-sm text-slate-400">
                    <strong className="text-white">Response Time:</strong> Usually within 2-4 hours
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Support;
