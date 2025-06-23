export default function ProductDetailPage() {
	return (
		<div className="min-h-screen bg-gray-50">
			{/* Main Product Section */}
			<div className="max-w-7xl mt-40 mx-auto px-4 sm:px-6 lg:px-8 py-8">
				<div className="lg:grid lg:grid-cols-2 lg:gap-x-8 lg:items-start">
					{/* Image Gallery */}
					<div className="flex flex-col-reverse">
						{/* Image Selector */}
						<div className="hidden mt-6 w-full max-w-2xl mx-auto sm:block lg:max-w-none">
							<div className="grid grid-cols-4 gap-6">
								{[1, 2, 3, 4].map((index) => (
									<button
										key={index}
										className="relative h-24 bg-white rounded-md flex items-center justify-center text-sm font-medium uppercase text-gray-900 cursor-pointer hover:bg-gray-50 focus:outline-none focus:ring focus:ring-offset-4 focus:ring-primary"
									>
										<span className="sr-only">
											Image {index}
										</span>
										<span className="absolute inset-0 rounded-md overflow-hidden">
											<img
												src={
													'https://random-image-pepebigotes.vercel.app/api/random-image'
												}
												alt={`Product view ${index}`}
												className="w-full h-full object-center object-cover"
											/>
										</span>
										<span
											className="absolute inset-0 rounded-md ring-2 ring-offset-2 ring-transparent"
											aria-hidden="true"
										/>
									</button>
								))}
							</div>
						</div>

						{/* Main Image */}
						<div className="w-full aspect-square">
							<img
								src="https://random-image-pepebigotes.vercel.app/api/random-image"
								alt="Premium Wireless Headphones"
								className="w-full h-full object-center object-cover sm:rounded-lg"
							/>
						</div>
					</div>

					{/* Product Info */}
					<div className="mt-10 px-4 sm:px-0 sm:mt-16 lg:mt-0">
						<h1 className="text-3xl font-bold tracking-tight text-gray-900">
							Premium Wireless Headphones
						</h1>

						{/* Price */}
						<div className="mt-4">
							<p className="text-3xl font-bold text-gray-900">
								$299.99
							</p>
							<p className="text-lg text-gray-500 line-through">
								$399.99
							</p>
							<p className="text-sm text-primary font-medium">
								Save $100 (25% off)
							</p>
						</div>

						{/* Description */}
						<div className="mt-6">
							<h3 className="sr-only">Description</h3>
							<div className="text-base text-gray-700 space-y-6">
								<p>
									Experience premium sound quality with our
									latest wireless headphones. Featuring
									advanced noise cancellation, 40-hour battery
									life, and premium comfort padding for
									all-day wear.
								</p>
								<p>
									Perfect for music lovers, professionals, and
									anyone who demands the best audio
									experience. Compatible with all Bluetooth
									devices and includes fast charging
									technology.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
