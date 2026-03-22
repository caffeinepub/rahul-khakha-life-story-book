import Map "mo:core/Map";
import Nat "mo:core/Nat";
import Runtime "mo:core/Runtime";

actor {
  type Chapter = {
    id : Nat;
    title : Text;
    subtitle : Text;
    ageRange : Text;
    contentHindi : Text;
    contentEnglish : Text;
    chapterNumber : Nat;
  };

  let chapters = Map.fromIter<Nat, Chapter>([].values());

  public query ({ caller }) func getAllChapters() : async [Chapter] {
    chapters.values().toArray();
  };

  public query ({ caller }) func getChapter(id : Nat) : async Chapter {
    switch (chapters.get(id)) {
      case (null) { Runtime.trap("Chapter not found") };
      case (?chapter) { chapter };
    };
  };
};
