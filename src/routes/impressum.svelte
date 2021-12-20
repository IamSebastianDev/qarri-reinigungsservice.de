<script>
	import Contact from '$lib/Contact.svelte';
	import Section from '$lib/UI/Section/Section.svelte';
	import SectionHeading from '$lib/UI/Section/SectionHeading.svelte';
</script>

<svelte:head>
	<title>Impressum | Qarri Reinigungsservice</title>
</svelte:head>

<Contact />
<Section id="datenschutz">
	<SectionHeading
		heading="Datenschutz"
		description="Erfahre mehr darüber, wie wir deine Daten verwenden."
	/>
	<div class=" mx-2 md:mx-12 lg:border-2 border-gray-800 p-12">
		<p>
			Beim Zugriff auf unsere Webseite werden automatisch allgemeine
			Informationen (sog. Server-Logfiles) erfasst. Diese beinhalten u.a.
			den von Ihnen verwendeten Webbrowser sowie Ihr Betriebssystem und
			Ihren Internet Service Provider. Diese Daten lassen keinerlei
			Rückschlüsse auf Ihre Person zu und werden von uns statistisch
			ausgewertet, um unseren Internetauftritt technisch und inhaltlich zu
			verbessern. Das Erfassen dieser Informationen ist notwendig, um den
			Inhalt der Webseite korrekt ausliefern zu können.
		</p>
		<p>
			Die Nutzung der Webseite ist grundsätzlich ohne Angabe
			personenbezogener Daten möglich. Soweit personenbezogene Daten
			(beispielsweise Name, Anschrift oder E-Mail-Adressen) erhoben
			werden, erfolgt dies, soweit möglich, stets auf freiwilliger Basis.
			Diese Daten werden ohne Ihre ausdrückliche Zustimmung nicht an
			Dritte weitergegeben.
		</p>
		<p>
			Sofern ein Vertragsverhältnis begründet, inhaltlich ausgestaltet
			oder geändert werden soll oder Sie an uns eine Anfrage stellen,
			erheben und verwenden wir personenbezogene Daten von Ihnen, soweit
			dies zu diesem Zwecke erforderlich ist (Bestandsdaten). Wir erheben,
			verarbeiten und nutzen personenbezogene Daten soweit dies
			erforderlich ist, um Ihnen die Inanspruchnahme des Webangebots zu
			ermöglichen (Nutzungsdaten). Sämtliche personenbezogenen Daten
			werden nur solange gespeichert wie dies für den genannten Zweck
			(Bearbeitung Ihrer Anfrage oder Abwicklung eines Vertrags)
			erforderlich ist. Hierbei werden steuer- und handelsrechtliche
			Aufbewahrungsfristen von uns berücksichtigt. Auf Anordnung der
			zuständigen Stellen müssen wir im Einzelfall Auskunft über diese
			Daten (Bestandsdaten) erteilen, soweit dies für Zwecke der
			Strafverfolgung, zur Gefahrenabwehr, zur Erfüllung der gesetzlichen
			Aufgaben der Verfassungsschutzbehörden oder des Militärischen
			Abschirmdienstes oder zur Durchsetzung der Rechte am geistigen
			Eigentum erforderlich ist.
		</p>
		<p>
			Wir weisen ausdrücklich darauf hin, dass die Datenübertragung im
			Internet (z. B. bei der Kommunikation per E-Mail) Sicherheitslücken
			aufweisen kann. Vor dem Zugriff auf Daten kann nicht lückenlos
			geschützt werden.
		</p>
		<p>
			Die Nutzung von im Rahmen der Impressumspflicht veröffentlichten
			Kontaktdaten durch Dritte zur Übersendung von nicht ausdrücklich
			angeforderter Werbung und Informationsmaterialien wird hiermit
			ausdrücklich untersagt. Ausgenommen hiervon sind bestehende
			Geschäftsbeziehungen bzw. es liegt Ihnen eine entsprechende
			Einwilligung von uns vor.
		</p>
		<p>
			Die Anbieter und alle auf dieser Website genannten Dritten behalten
			sich ausdrücklich rechtliche Schritte im Falle der unverlangten
			Zusendung von Werbeinformationen vor. Gleiches gilt für die
			kommerzielle Verwendung und Weitergabe der Daten.
		</p>
		<h3>Google Fonts:</h3>

		<p>
			Auf diesem Webauftritt werden externe Schriften von Google Fonts
			verwendet. Google Fonts ist ein Dienst der Google Inc. ("Google").
			Die Einbindung dieser Web Fonts erfolgt durch einen Serveraufruf, in
			der Regel ein Server von Google in den USA. Hierdurch wird an den
			Server übermittelt, welche unserer Internetseiten Sie besucht haben.
			Auch wird die IP-Adresse des Browsers des Endgerätes des Besuchers
			dieser Internetseiten von Google gespeichert. Nähere Informationen
			finden Sie in den Datenschutzhinweisen von Google, die Sie hier
			abrufen können: <a
				rel="norefferer noopener nofllow"
				target="_blank"
				href="https://www.google.com/policies/privacy/"
				title="Google Privacy Policy"
				>www.google.com/policies/privacy/</a
			>
			und
			<a
				rel="norefferer noopener nofllow"
				target="_blank"
				href="https://fonts.google.com/about#"
				title="Google Fonts">https://fonts.google.com/about#</a
			>
		</p>
	</div>
</Section>

<style lang="postcss">
	h3 {
		@apply text-xl font-semibold;
	}

	p {
		@apply py-2;
	}

	a {
		@apply text-accent;
	}
</style>
