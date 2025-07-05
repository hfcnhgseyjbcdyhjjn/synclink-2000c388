
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { useForm } from 'react-hook-form';
import { toast } from '@/hooks/use-toast';
import Navigation from '@/components/Navigation';

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
    <div className="min-h-screen bg-slate-900">
      <Navigation />
      <div className="pt-20 pb-16 px-4">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-white mb-4">Support Center</h1>
            <p className="text-slate-300 text-lg">
              Need help? Submit a support request and join our Discord server for assistance.
            </p>
          </div>

          <Card className="bg-slate-800 border-slate-700">
            <CardHeader>
              <CardTitle className="text-white">Submit Support Request</CardTitle>
              <CardDescription className="text-slate-400">
                Please provide your username and describe the issue you're experiencing.
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
                        <FormLabel className="text-white">Username</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Enter your username"
                            className="bg-slate-700 border-slate-600 text-white placeholder:text-slate-400"
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
                        <FormLabel className="text-white">Problem Description</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Describe the issue you're experiencing..."
                            className="bg-slate-700 border-slate-600 text-white placeholder:text-slate-400 min-h-32"
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
                    className="w-full bg-cyan-600 hover:bg-cyan-700 text-white"
                  >
                    {isSubmitting ? 'Submitting...' : 'Submit Support Request'}
                  </Button>
                </form>
              </Form>

              <div className="mt-6 p-4 bg-slate-700/50 rounded-lg">
                <p className="text-slate-300 text-sm text-center">
                  For immediate support, join our Discord server: 
                  <a 
                    href="https://discord.gg/rosterflow" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-cyan-400 hover:text-cyan-300 ml-1 underline"
                  >
                    discord.gg/rosterflow
                  </a>
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Support;
