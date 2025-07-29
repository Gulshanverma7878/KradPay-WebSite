// import React from 'react';
// import { Button } from "@/components/ui/button";
// import { ChevronRight, Play } from 'lucide-react';
// import { DotLottieReact } from '@lottiefiles/dotlottie-react';

// const HeroSection = () => {
//     return (
//         <div className="bg-gradient-to-r from-violet-500 via-purple-500 to-pink-500 text-white">
//             <div className="max-w-7xl mx-auto px-4 py-24 sm:px-6 lg:px-8">
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
//                     {/* Left Content */}
//                     <div className="text-left space-y-8">
//                         <h1 className="text-4xl md:text-6xl font-bold leading-tight">
//                             Pay Bills & Recharge
//                             <span className="block">In Seconds</span>
//                         </h1>
//                         <p className="text-xl md:text-2xl opacity-90">
//                             Experience the fastest, most secure way to manage all your payments in one place
//                         </p>
//                         {/* <div className="flex gap-4">
//                             <Button size="lg" className="border-white bg-white text-purple-600 hover:bg-purple-600 hover:text-black">
//                                 Get Started <ChevronRight className="ml-2 w-4 h-4" />
//                             </Button>
//                             <Button size="lg" variant="outline" className="border-white text-purple-600 hover:bg-purple-600">
//                                 <Play className="w-4 h-4 mr-2" /> Watch Demo
//                             </Button>
//                         </div> */}
//                         {/* Trust Indicators */}
//                         <div className="flex items-center space-x-8 pt-8">
//                             <div>
//                                 <div className="text-3xl font-bold">10M+</div>
//                                 <div className="text-sm opacity-80">Active Users</div>
//                             </div>
//                             <div className="h-8 w-px bg-purple-300"></div>
//                             <div>
//                                 <div className="text-3xl font-bold">₹100Cr+</div>
//                                 <div className="text-sm opacity-80">Daily Transactions</div>
//                             </div>
//                             <div className="h-8 w-px bg-purple-300"></div>
//                             <div>
//                                 <div className="text-3xl font-bold">4.9/5</div>
//                                 <div className="text-sm opacity-80">User Rating</div>
//                             </div>
//                         </div>
//                     </div>
//                     {/* Right Image */}
//                     <div className="hidden md:block">
//                         <div className="relative">
//                             <div className="absolute -inset-4 bg-white/10 rounded-lg blur-lg"></div>
//                             <DotLottieReact
//                                 src="https://lottie.host/f13690f5-46ab-4ee2-ba41-65b64cd1d076/pjXHmpy7mT.lottie"
//                                 loop
//                                 autoplay
//                             />
//                             {/* <img
//                                 src="/api/placeholder/600/800"
//                                 alt="KradPay App"
//                                 className="relative rounded-lg shadow-2xl"
//                             /> */}
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default HeroSection;


import React from 'react';
import { ChevronRight, Play } from 'lucide-react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  size?: 'lg';
  variant?: 'outline';
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ children, size, variant, className = '', ...props }) => {
  const baseStyles = "inline-flex items-center justify-center rounded-md font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2";
  const sizeStyles: Record<string, string> = {
    lg: "px-8 py-3 text-lg"
  };
  const variantStyles: Record<string, string> = {
    outline: "border-2 bg-transparent hover:bg-white hover:text-purple-600"
  };
  
  return (
    <button 
      className={`${baseStyles} ${size ? sizeStyles[size] : ''} ${variant ? variantStyles[variant] : ''} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

// Simple animated placeholder for the Lottie animation
const AnimatedPhone = () => (
  <div className="relative w-full h-64 sm:h-80 md:h-96 lg:h-[500px] flex items-center justify-center">
    <div className="relative w-48 sm:w-56 md:w-64 lg:w-80 h-full">
      <div className="absolute inset-0 bg-white/20 rounded-3xl animate-pulse"></div>
      <div className="absolute inset-4 bg-white/30 rounded-2xl flex items-center justify-center">
        <div className="text-center text-white/80">
          <div className="text-4xl sm:text-5xl md:text-6xl mb-4">📱</div>
          <div className="text-sm sm:text-base font-medium">KradPay App</div>
        </div>
      </div>
      {/* Floating elements for animation */}
      <div className="absolute -top-4 -left-4 w-8 h-8 bg-yellow-400 rounded-full animate-bounce opacity-80"></div>
      <div className="absolute -top-2 -right-6 w-6 h-6 bg-green-400 rounded-full animate-pulse opacity-80"></div>
      <div className="absolute -bottom-4 -right-2 w-10 h-10 bg-blue-400 rounded-full animate-bounce delay-300 opacity-80"></div>
    </div>
  </div>
);

export default function ResponsiveHeroSection() {
  return (
    <div className="bg-gradient-to-r from-violet-500 via-purple-500 to-pink-500 text-white">
      {/* Mobile Layout */}
      <div className="lg:hidden">
        <div className="px-4 py-8">
          {/* Mobile Image */}
          <div className="text-center mb-8">
            <div className="relative inline-block">
              <div className="absolute -inset-1 bg-white/10 rounded-lg blur-sm"></div>
              <div className="relative w-48 h-64 mx-auto">
                <div className="absolute inset-0 bg-white/20 rounded-3xl animate-pulse"></div>
                <div className="absolute inset-3 bg-white/30 rounded-2xl flex items-center justify-center">
                  <div className="text-center text-white/80">
                    <div className="text-4xl mb-3">📱</div>
                    <div className="text-sm font-medium">KradPay App</div>
                  </div>
                </div>
                <div className="absolute -top-2 -left-2 w-6 h-6 bg-yellow-400 rounded-full animate-bounce opacity-80"></div>
                <div className="absolute -top-1 -right-3 w-4 h-4 bg-green-400 rounded-full animate-pulse opacity-80"></div>
                <div className="absolute -bottom-2 -right-1 w-7 h-7 bg-blue-400 rounded-full animate-bounce delay-300 opacity-80"></div>
              </div>
            </div>
          </div>
          
          {/* Mobile Content */}
          <div className="text-center space-y-6">
            <h1 className="text-4xl font-bold leading-tight px-2">
              Pay Bills & Recharge
              <span className="block">In Seconds</span>
            </h1>
            <p className="text-lg opacity-90 px-4">
              Experience the fastest, most secure way to manage all your payments in one place
            </p>
            
            {/* Mobile Buttons */}
            <div className="space-y-3 px-4">
              <Button 
                size="lg" 
                className="border-white bg-white text-purple-600 hover:bg-purple-100 hover:text-purple-700 w-full"
              >
                Get Started <ChevronRight className="ml-2 w-4 h-4" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white text-white hover:bg-white hover:text-purple-600 w-full"
              >
                <Play className="w-4 h-4 mr-2" /> Watch Demo
              </Button>
            </div>
            
            {/* Mobile Trust Indicators */}
            <div className="pt-6">
              <div className="grid grid-cols-3 gap-4 px-4">
                <div className="text-center">
                  <div className="text-2xl font-bold">10M+</div>
                  <div className="text-xs opacity-80">Active Users</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold">₹100Cr+</div>
                  <div className="text-xs opacity-80">Daily Trans.</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold">4.9/5</div>
                  <div className="text-xs opacity-80">User Rating</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Desktop Layout */}
      <div className="hidden lg:block min-h-screen flex items-center">
        <div className="w-full max-w-7xl mx-auto px-4 py-24 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="text-left space-y-8">
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                Pay Bills & Recharge
                <span className="block">In Seconds</span>
              </h1>
              <p className="text-xl md:text-2xl opacity-90">
                Experience the fastest, most secure way to manage all your payments in one place
              </p>
              
              {/* Action Buttons */}
              <div className="flex gap-4">
                <Button 
                  size="lg" 
                  className="border-white bg-white text-purple-600 hover:bg-purple-100 hover:text-purple-700"
                >
                  Get Started <ChevronRight className="ml-2 w-4 h-4" />
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-white text-white hover:bg-white hover:text-purple-600"
                >
                  <Play className="w-4 h-4 mr-2" /> Watch Demo
                </Button>
              </div>
              
              {/* Trust Indicators */}
              <div className="flex items-center space-x-8 pt-8">
                <div>
                  <div className="text-3xl font-bold">10M+</div>
                  <div className="text-sm opacity-80">Active Users</div>
                </div>
                <div className="h-8 w-px bg-purple-300"></div>
                <div>
                  <div className="text-3xl font-bold">₹100Cr+</div>
                  <div className="text-sm opacity-80">Daily Transactions</div>
                </div>
                <div className="h-8 w-px bg-purple-300"></div>
                <div>
                  <div className="text-3xl font-bold">4.9/5</div>
                  <div className="text-sm opacity-80">User Rating</div>
                </div>
              </div>
            </div>
            
            {/* Right Image */}
            <div>
              <div className="relative">
                <div className="absolute -inset-4 bg-white/10 rounded-lg blur-lg"></div>
                <div className="relative">
                  <AnimatedPhone />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}