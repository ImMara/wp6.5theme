import { registerBlockType } from '@wordpress/blocks';
import { InnerBlocks, MediaUpload, InspectorControls } from '@wordpress/block-editor';
import { Button, PanelBody } from '@wordpress/components';

registerBlockType( 'mon-theme/full-width-section', {
    title: 'Full Width Section',
    icon: 'align-full-width',
    category: 'layout',
    attributes: {
        backgroundImage: {
            type: 'string',
            default: null,
        },
    },

    edit: ({attributes, setAttributes}) => {
        const {backgroundImage} = attributes;

        function onImageSelect(imageObject) {
            setAttributes({backgroundImage: imageObject.sizes.full.url});
        }

        return (
            <>
                <InspectorControls>
                    <PanelBody title="Background Image Settings">
                        <MediaUpload
                            onSelect={media => onImageSelect(media)}
                            allowedTypes={ ['image'] }
                            value={backgroundImage}
                            render={
                            ({ open }) => (
                                <Button onClick={open}>Open Media Library</Button>
                            )}
                        />
                    </PanelBody>
                </InspectorControls>
                <div className="full-width-section" style={backgroundImage ? {backgroundImage: `url(${backgroundImage})`} : {}}>
                    <InnerBlocks />
                </div>
            </>
        );
    },

    save: ({attributes}) => {
        const {backgroundImage} = attributes;

        return (
            <div className="full-width-section" style={backgroundImage ? {backgroundImage: `url(${backgroundImage})`} : {}}>
                <InnerBlocks.Content />
            </div>
        );
    },
} );