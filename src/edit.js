/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-i18n/
 */

import { TextControl, Placeholder } from "@wordpress/components";
import { __ } from "@wordpress/i18n";
/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import "./editor.scss";

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#edit
 *
 * @param {Object} [props]           Properties passed from the editor.
 * @param {string} [props.className] Class name generated for the block.
 *
 * @return {WPElement} Element to render.
 */

export default function Edit({ attributes, className, setAttributes }) {
	console.log(className);
	return (
		<div className={className}>
			<Placeholder
				label="Gutenpride Block HANBOOK"
				instructions="Add your message here..."
			></Placeholder>
			<TextControl
				label={__("Message", "gutenpride")}
				value={attributes.message}
				onChange={(val) => setAttributes({ message: val })}
			/>
		</div>
	);
}
