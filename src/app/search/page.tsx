// "use client";

import UserSearch from "@/components/UserSearch";
import { AuthUser } from "@/model/user";
import { Metadata } from "next";
// import { searchUser } from "@/service/search";
import { ChangeEvent, FormEvent, useState } from "react";
import useSWR from "swr";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
    title: "User Search",
    description: "Search users to follow",
};

export default function SearchPage() {
    return <UserSearch />;
}
