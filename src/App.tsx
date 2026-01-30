import {
    Navbar,
    Hero,
    PracticeAreas,
    Testimonials,
    Contact,
    Footer
} from "@/components/sections";
import {
    WhatsAppFloat,
    CookieConsent,
    CustomCursor,
    BookingModal,
    StickyCallBar,
    DisclaimerModal
} from "@/components/features";

function App() {
    return (
        <main className="bg-[#030303] text-white relative selection:bg-[#C6A87C] selection:text-black">
            <div className="noise-bg" />
            
            <Navbar />
            <Hero />
            <PracticeAreas />
            <Testimonials />
            <Contact />
            <Footer />

            {/* Floating Widgets */}
            <WhatsAppFloat />
            <CookieConsent />
            <CustomCursor />
            <StickyCallBar />
            <DisclaimerModal />
            
            {/* Hidden trigger for modal if needed programmatically, otherwise accessible via buttons */}
            <div className="hidden">
                <BookingModal />
            </div>
        </main>
    );
}

export default App;