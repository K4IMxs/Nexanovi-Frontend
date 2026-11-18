import { LandingHero } from "../components/LandingHero"
import { LandingFeatures } from "../components/LandingFeatures"
import { LandingBenefits } from "../components/LandingBenefits"
import { LandingCTA } from "../components/LandingCTA"
import { LandingFooter } from "../components/LandingFooter"
function LandingPage() {
    return (
        <>
            <LandingHero />
            <LandingFeatures />
            <LandingBenefits />
            <LandingCTA />
            <LandingFooter />
        </>
    )
}export {LandingPage}