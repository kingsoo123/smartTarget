const Slider = () => {
  return (
    <div className="w-full overflow-x-hidden mt-[100px]">
      <div className="pl-[40px] flex w-full justify-center items-center">
        <p className="text-teal-600">Trusted Partners 🚀</p>
      </div>

      <div class="py-12 animate-marquee2 whitespace-nowrap">
        <span class="text-4xl mx-4">Transawave</span>
        <span class="text-4xl mx-4">Facebook</span>
        <span class="text-4xl mx-4">Twitter</span>
        <span class="text-4xl mx-4">Paystack</span>
        <span class="text-4xl mx-4">Flutterwave</span>
      </div>
    </div>
  );
};

export default Slider;
