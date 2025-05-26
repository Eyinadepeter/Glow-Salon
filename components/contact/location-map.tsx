import Image from "next/image"
import { MapPin, Phone } from "lucide-react"

export default function LocationMap() {
  return (
    <div className="rounded-lg overflow-hidden shadow-md h-[400px]">
      <div className="relative h-full w-full">
        <Image
          src="https://images.unsplash.com/photo-1569336415962-a4bd9f69c07b?w=1200&h=800&fit=crop&auto=format&q=80"
          alt="Mumbai Map"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/20"></div>

        {/* Location Info */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="bg-white/90 p-6 rounded-lg shadow-lg max-w-md">
            <h3 className="text-xl font-bold mb-4">Glow Unisex Salon</h3>
            <div className="space-y-3">
              <div className="flex items-start">
                <MapPin className="h-5 w-5 text-primary shrink-0 mt-0.5 mr-2" />
                <div>
                  <p className="font-medium">Main Branch</p>
                  <p className="text-gray-600">123 Beauty Lane, Mumbai, Maharashtra 400001, India</p>
                </div>
              </div>
              <div className="flex items-start">
                <MapPin className="h-5 w-5 text-primary shrink-0 mt-0.5 mr-2" />
                <div>
                  <p className="font-medium">Bandra Branch</p>
                  <p className="text-gray-600">456 Hill Road, Bandra West, Mumbai, Maharashtra 400050, India</p>
                </div>
              </div>
              <div className="flex items-start">
                <Phone className="h-5 w-5 text-primary shrink-0 mt-0.5 mr-2" />
                <div>
                  <p className="font-medium">Contact</p>
                  <p className="text-gray-600">+91 98765 43210</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
