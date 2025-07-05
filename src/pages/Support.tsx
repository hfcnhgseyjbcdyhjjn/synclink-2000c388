
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
    console.log('Submitting support request:', data);

    try {
      const webhookUrl = 'https://discord.com/api/webhooks/1384650136503844874/-70r5MQLYkTuus3vwuPerdRPUSZ9TiMNtqgQIVGNBcJCiocgeFt-nhBUkjdf4mseIb8s';
      
      const embed = {
        title: "🎫 New Support Request",
        color: 0x00d9ff,
        fields: [
          {
            name: "👤 Username",
            value: data.username,
            inline: true
          },
          {
            name: "❓ Problem Description",
            value: data.problem,
            inline: false
          }
        ],
        timestamp: new Date().toISOString(),
        footer: {
          text: "RosterFlow Support"
        }
      };

      const response = await fetch(webhookUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          embeds: [embed]
        }),
      });

      if (response.ok) {
        toast({
          title: "Support Request Sent",
          description: "Your support request has been successfully submitted. We'll get back to you soon!",
        });
        form.reset();
      } else {
        throw new Error('Failed to send support request');
      }
    } catch (error) {
      console.error('Error sending support request:', error);
      toast({
        title: "Error",
        description: "Failed to send support request. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-900">
      <Navigation />
      <div className="pt-20 pb-16 px-4">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-white mb-4">Support Center</h1>
            <p className="text-slate-300 text-lg">
              Need help? Submit a support request and our team will assist you.
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
                    {isSubmitting ? 'Sending...' : 'Submit Support Request'}
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Support;
