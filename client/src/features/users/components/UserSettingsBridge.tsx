"use client";

import { useGetMeQuery } from "../usersApi";

function UserSettingsBridge() {
	useGetMeQuery(undefined, {
		refetchOnMountOrArgChange: false,
		refetchOnFocus: false,
	});

	return null;
}
export default UserSettingsBridge;
