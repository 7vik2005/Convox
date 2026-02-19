import { useQuery } from "@tanstack/react-query";
import { getUserFriends } from "../lib/api";
import { Link } from "react-router";
import { MapPinIcon, UsersIcon } from "lucide-react";

import FriendCard, { getLanguageFlag } from "../components/FriendCard";
import NoFriendsFound from "../components/NoFriendsFound";

const FriendPage = () => {
  const { data: friends = [], isLoading: loadingFriends } = useQuery({
    queryKey: ["friends"],
    queryFn: getUserFriends,
  });

  return (
    <div className="p-4 sm:p-6 lg:p-8">
      <div className="container mx-auto space-y-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
            My Friends
          </h2>
          <Link to="/" className="btn btn-outline btn-sm">
            <UsersIcon className="mr-2 size-4" />
            Back to Home
          </Link>
        </div>

        {loadingFriends ? (
          <div className="flex justify-center py-12">
            <span className="loading loading-spinner loading-lg" />
          </div>
        ) : friends.length === 0 ? (
          <NoFriendsFound />
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {friends.map((friend) => (
              <div
                key={friend._id}
                className="card bg-base-200 hover:shadow-lg transition-all duration-300"
              >
                <div className="card-body p-5 space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="avatar size-16 rounded-full">
                      <img src={friend.profilePic} alt={friend.fullName} />
                    </div>

                    <div>
                      <h3 className="font-semibold text-lg">
                        {friend.fullName}
                      </h3>
                      {friend.location && (
                        <div className="flex items-center text-xs opacity-70 mt-1">
                          <MapPinIcon className="size-3 mr-1" />
                          {friend.location}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Languages with flags */}
                  <div className="flex flex-wrap gap-1.5">
                    <span className="badge badge-secondary">
                      {getLanguageFlag(friend.nativeLanguage)}
                      Native: {friend.nativeLanguage}
                    </span>
                    <span className="badge badge-outline">
                      {getLanguageFlag(friend.learningLanguage)}
                      Learning: {friend.learningLanguage}
                    </span>
                  </div>

                  {friend.bio && (
                    <p className="text-sm opacity-70">{friend.bio}</p>
                  )}

                  {/* Message button */}
                  <Link
                    to={`/chat/${friend._id}`}
                    className="btn btn-primary w-full mt-2"
                  >
                    Message
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default FriendPage;
