import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { MapPin } from "lucide-react"

// Define salon locations
const locations = [
  { name: "Glow Salon - Bandra", address: "123 Hill Road, Bandra West, Mumbai" },
  { name: "Glow Salon - Andheri", address: "456 Andheri Link Road, Andheri West, Mumbai" },
  { name: "Glow Salon - Powai", address: "789 Central Avenue, Hiranandani Gardens, Powai, Mumbai" },
]

export default function LocationMap() {
  return (
    <div className="rounded-lg overflow-hidden shadow-md">
      <div className="relative h-[400px] w-full">
        <Image
          src="https://images.unsplash.com/photo-1569336415962-a4bd9f69c07b?w=1200&h=800&fit=crop&auto=format&q=80"
          alt="Mumbai Map"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/20"></div>

        {/* Location Markers */}
        <div className="absolute inset-0 flex flex-col justify-center items-center">
          <div className="bg-white/90 p-6 rounded-lg shadow-lg max-w-md w-full">
            <h3 className="text-lg font-bold mb-4">Our Salon Locations</h3>
            <div className="space-y-4">
              {locations.map((location, index) => (
                <div key={index} className="flex items-start">
                  <MapPin className="h-5 w-5 text-primary shrink-0 mt-0.5 mr-2" />
                  <div>
                    <p className="font-medium">{location.name}</p>
                    <p className="text-sm text-gray-600">{location.address}</p>
                  </div>
                </div>
              ))}
            </div>
            <Button asChild className="w-full mt-4">
              <Link href="/booking">Book an Appointment</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
