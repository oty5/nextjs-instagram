"use client";

import { HomeUser } from "@/model/user";
import Link from "next/link";
import { PropagateLoader } from "react-spinners";
import useSWR from "swr";
import Avatar from "./Avatar";
import ScrollableBar from "./ui/ScrollableBar";
import useMe from "@/hooks/me";

export default function FollowingBar() {
    // const { data, isLoading: loading, error } = useSWR<HomeUser>("/api/me");
    const { user, isLoading: loading, error } = useMe();
    // console.log(data);
    const users = user?.following;
    // const users = undefined;
    // const users = data?.following && [
    //     ...data?.following,
    //     ...data?.following,
    //     ...data?.following,
    // ];
    // const { d, i, e } = useSWR("/api/post");
    // console.log(d);

    return (
        <section className="w-full flex justify-center items-center p-4 shadow-sm shadow-neutral-300 mb-4 rounded-lg min-h-[90px] overflow-x-auto relative z-0">
            {loading ? (
                <PropagateLoader size={8} color="red" />
            ) : (
                (!users || users.length === 0) && (
                    <p>{"you don't have following"}</p>
                )
            )}
            {users && users.length > 0 && (
                <ScrollableBar>
                    {users.map(({ image, username }) => (
                        <Link
                            key={username}
                            className="flex flex-col items-center w-20"
                            href={`/user/${username}`}
                        >
                            <Avatar image={image} highlight />
                            <p className="w-full text-sm text-center text-ellipsis overflow-hidden w-20">
                                {username}
                            </p>
                        </Link>
                    ))}
                </ScrollableBar>
            )}
        </section>
    );
}
