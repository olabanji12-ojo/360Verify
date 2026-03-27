import { UserRound, Home, Users } from "lucide-react";
import VerificationCard from "./VerificationCard";
import {useNavigate } from "react-router-dom"

const NewVerification = () => {

    const navigate = useNavigate();

    const handleIdentityVerification = () => {
        navigate("/dashboard/identity");
    };

    const handleAddressVerification = () => {
        navigate("/dashboard/verify-address");
    };

    const handleGuarantorVerification = () => {
        navigate("/dashboard/guarantor");
    };

   const viewMultipleCandidate = () => {
        navigate("/dashboard/multiple-candidate")
     
   }

    return (
        <section className="flex flex-col gap-10">

            {/* Header Text */}
            <div className="flex flex-col gap-3">
                <h1 className="text-3xl font-bold text-[#333333]">Select your verification type.</h1>
                <p className="text-[#666666] text-sm max-w-[500px] leading-relaxed">
                    Choose the verification type that best fits your needs to confirm identities and get started.
                </p>
                <button
                    onClick={viewMultipleCandidate}
                    className="text-[#ff8a63] font-bold text-sm hover:underline w-fit cursor-pointer mt-2">
                    Verify Multiple Candidates
                </button>
            </div>

            {/* Verification Cards Grid */}
            <div className="grid grid-cols-2 gap-8 w-full max-w-[1000px] items-center justify-center">

                <VerificationCard
                    onClick={handleIdentityVerification}
                    icon={<UserRound size={32} />}
                    title="Identity"
                    description="Confirm identities instantly using BVN, NIN, voter's card, or other valid forms of identification."
                />

                <VerificationCard
                    onClick={handleAddressVerification}
                    icon={<Home size={32} />}
                    title="Address"
                    description="Confirm residential address through physical and virtual verification to ensure accuracy and authenticity."
                />

                <VerificationCard
                    onClick={handleGuarantorVerification}
                    icon={<Users size={32} />}
                    title="Guarantors"
                    description="Validate guarantor details and references to confirm reliability and support informed hiring decisions."
                />

            </div>

        </section>
    );
};

export default NewVerification;
