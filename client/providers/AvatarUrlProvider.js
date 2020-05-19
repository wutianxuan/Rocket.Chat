import React, { useMemo } from 'react';
import { Avatar } from '@rocket.chat/fuselage';

import { useSetting } from '../contexts/SettingsContext';
import { baseURI } from '../../app/utils/client/lib/baseuri';

const base = baseURI;

export function AvatarUrlProvider({ children }) {
	const cdn = useSetting('CDN_PREFIX_ALL');
	const cdnPrefix = useSetting('CDN_PREFIX');

	const avatarBase = useMemo(() => ({ baseUrl: `${ (cdn && cdnPrefix) || '' }${ base }` }), [cdn, cdnPrefix]);
	return <Avatar.Context.Provider children={children} value={avatarBase} />;
}
