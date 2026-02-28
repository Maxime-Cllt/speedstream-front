export function cn(...classes: (string | boolean | undefined | null)[]): string {
	return classes.filter(Boolean).join(' ');
}

export function getLocalIP(): Promise<string | null> {
	return new Promise((resolve) => {
		const pc = new RTCPeerConnection({
			iceServers: []
		});
		pc.createDataChannel('');
		pc.onicecandidate = (ice) => {
			if (!ice.candidate) {
				pc.close();
				resolve(null);
				return;
			}
			const candidate = ice.candidate.candidate;
			const match = candidate.match(/(\d+\.\d+\.\d+\.\d+)/);
			if (match) {
				pc.close();
				resolve(match[1]);
			}
		};
		pc.createOffer().then((offer) => pc.setLocalDescription(offer));
		setTimeout(() => {
			pc.close();
			resolve(null);
		}, 1000);
	});
}

export function replaceLocalhostWithIP(url: string, ip: string): string {
	return url.replace(/localhost|127\.0\.0\.1/, ip);
}
