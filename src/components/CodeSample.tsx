import { Tabs } from "@kobalte/core";
import type { JSXElement } from "solid-js";
import preferences from "./Preferences/usePreferences";

export default function CodeSample(props: { js: JSXElement; ts: JSXElement }) {
	const [{ jsTs }, { setJsTs }] = preferences;

	return (
		<Tabs.Root
			value={jsTs()}
			onValueChange={(val) => setJsTs(val as "js" | "ts")}
		>
			<Tabs.List>
				<Tabs.Trigger value="js">JS</Tabs.Trigger>
				<Tabs.Trigger value="ts">TS</Tabs.Trigger>
				<Tabs.Indicator />
			</Tabs.List>
			<Tabs.Content value="js">{props.js}</Tabs.Content>
			<Tabs.Content value="ts">{props.ts}</Tabs.Content>
		</Tabs.Root>
	);
}
