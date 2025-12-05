
export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

export async function sendMessage(formData: ContactFormData) {
  // Simulate network delay
  await new Promise((resolve) => setTimeout(resolve, 1000));
  
  // Return success message directly since there is no backend
  return { 
    success: true, 
    message: "Thank you! This is a demo portfolio. In a production environment, this would connect to a form service like Formspree or EmailJS." 
  };
}
