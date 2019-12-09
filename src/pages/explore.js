import React from "react"
import Layout from "../components/layout"
import {
  PaddedRedHeader,
  DividedHeader,
  TripleColumn,
  Column,
} from "../components/styled/layout"
import styled from "styled-components"

const ExplorePageWrapper = styled.div`
  background-color: #fafaea;
`

const PaddedWrapper = styled.div`
  max-width: 1150px;
  margin: 0 auto;
  padding-bottom: 10rem;
`

const ExplorePage = () => (
  <Layout>
    <ExplorePageWrapper>
      <PaddedRedHeader title="Stay Awhile" />
      <PaddedWrapper>
        <DividedHeader left="Around" right="Town" />
        <TripleColumn>
          <Column>
            <p>
              Downtown Salida is about a mile away from the motel. You can
              obviously reach it by car, but it’s an easy bike ride down the
              Monarch Spur trail too. If you plan on drinking, consider taking a
              ride with Mountain Taxi or sometimes you can catch a random Uber.
              For larger groups, check out Colorado Adventure Tours. Shop Local
              Salida has its fair share of great shops like Howl Mercantile,
              Faye & Maye, Ruby Blues, Drift & Amble, Wanderlust Road, the Honey
              Boutique, The Crystal Shop and more. We've also stumbled across
              some great finds at the local antique and rummage shops along
              Highway 50 and downtown. Buy Some Art Salida plays host to a
              vibrant art community. Check out some local spots like Sutty's,
              Curiodity, Joshua Been Gallery, and if you dare: The Bungled
              Jungle{" "}
            </p>
          </Column>
          <Column>
            <p>
              Take a Tintype Portrait Photo Want to look like an old west
              badass? Tim Brown Photography does tintype photos just like they
              did over 100 years ago. Take a Yoga Class Salida has some great
              studios with reasonable drop-in rates. Both Yoga Olas and Yoga
              Tonic are great choices. Take a Downtown Ghost Tour Take a tour of
              Salida’s sordid and sometimes occult past with the newly
              introduced ‘Darkside of Salida’ tour. Become a Pinball Wizard Fun
              Street Family Arcade lets you test your mettle at Galaga, skee
              ball and other arcades. This is a great bad weather option (or
              really just whenever).{" "}
            </p>
          </Column>
          <Column>
            <p>
              Go Bowling It’s recently been updated, but you'll swear you
              stepped into the set of Stranger Things: Super Bowl Lanes Treat
              Your Furry Friend Right Salida probably has more dogs than people,
              so make sure you treat your pet right! We like Alpha Dog Care for
              pet boarding, Gone to the Dogs for gear and grooming, and Loyal
              Dukes Dog Park for letting the hellions run wild! Make Some Smoke
              Signals We know why you are really here... And don't be surprised
              if you bump into your friend's mom at the local dispensary. There
              are at least 4 to choose from in Salida - we like the folks at
              Tenderfoot Health Collective.
            </p>
          </Column>
        </TripleColumn>
        <DividedHeader left="Out" right="Side" />
        <TripleColumn>
          <Column>
            <p>
              Climb a 14er We haver more 14ers outside our door than just about
              any spot in Colorado. Try Shavano, Princeton, Yale, Harvard,
              Elbert and many more. 14ers.com is a great site to explore for
              routes and trailheads. Check out Salida Mountain Sports or The
              Trailhead in BV for gear and maps. There are also tons of more
              mild (and often more scenic) hikes like the Greens Creek, Lost
              Lake and Waterdog Lakes. Ski Monarch Just 25 minutes up Monarch
              pass you'll find a great ski resort: Monarch Mountain. We like Mt
              Shavano Ski Shop for rentals and Salida Sports Recycler for wax
              and tunes. Go Ride a Bike There is a reason you see so many bikes
              here - we have tons of amazing mountain biking just about year
              round. Talk to the folks at Absolute Bikes or Subculture Cyclery
              and they can get you set up with a nice rental, show you some
              local trails or even get you set up with a shuttle to the world
              famous Monarch Crest Trail.
            </p>
          </Column>
          <Column>
            <p>
              Soak Your Tired Bones There are at least 4 public hot springs
              within an hours drive of the motel. Mt Princeton is the most
              popular, but don't forget about Cottonwood Hot Springs, Joyful
              Journey and Valley View if you are a little more adventurous. Go
              Dog Sledding Heed the call of the wild and book a ride with
              Monarch Dog Sleds - or if you want to burn a little oil and feel a
              little more speed, you can hop on a snowmobile. Raft the Arkansas
              The Arkansas River runs right through town and from June through
              August the river offers something for all abilities. Good news for
              you: Salida River Adventures opened up right next to the hotel so
              you can just walk next door and suit up! Browns Canyon is the
              classic trip, but try the Numbers for something more sporty. They
              also run package deals with brewery tours for groups who have a
              full day.
            </p>
          </Column>
          <Column>
            <p>
              Go Fishing Salida River Adventures also does guided fishing trips,
              and, again, is located right next to the motel. The guys there
              will have the scoop on the latest hatches as well as guided float
              and wade trips in the area. Try Your Luck at SUP There is a fun,
              fairly mild whitewater park that runs through town. Rent a stand
              up paddle board or an tube at Surf Salida downtown. They rent a
              good selection of gear from Badfish, another awesome Salida
              company.
            </p>
          </Column>
        </TripleColumn>
        <DividedHeader left="Food" right="Drink" />
        <TripleColumn>
          <Column>
            <p>
              Get Your Caffeine Fix While we serve a pretty good cup of coffee
              in our lobby (we serve Huckleberry), if you need something at 5am
              or a fancy roast with a little more kick, check out Steam Coffee
              Caboose (if you are staying with us we are happy to give you a
              coupon for a free drip coffee). Elsewhere around the city you’ll
              find Sacred Grouns Cafe Dawn and Howl Mercantile. Start Your Day
              While we have coffee, tea, fruit and yogurt in the lobby starting
              at 7:30, sometimes you need a little more to get you going. For
              that we suggest Firefly or Robin’s. They have a wide variety of
              options to suit just about every taste and dietary restriction. If
              you are looking for a classic diner and you have the hunger of
              several above average humans, then Patio Pancake is the breakfast
              spot for you. Pro tip: if you get the 'full order' breakfast
              burrito, your plate will come with TWO burritos...ask us how we
              know! Also, be sure to check out Little Red Hen Bakery for some of
              the best fresh-baked goods around, Gathering Grounds for healthy
              fare or Mo Burrito for grab-and-go breakfast burritos.
            </p>
          </Column>
          <Column>
            <p>
              Fill Your Belly For a small town, Salida has some great spots to
              refuel after a day in the woods (or a few too many the night
              before, as the case may be). We probably frequent The Fritz the
              most out of any local restaurant. Beyond the two great pizza
              joints outlined below, Currents has a great stroganoff and french
              dip. For lunch, we can't get enough of the sandwiches at Sweeties,
              and their other restaurant, Mo Burrito, serves up some fast-casual
              Mexican fare. Also, Tacos El Tapatio is a tasty little taco truck
              on the East end of town. Finally, you probably passed this
              nondescript metal building without noticing it, but Thai Mini Cafe
              in Poncha Springs is a total hidden gem. The nicest staff and some
              tasty curries and noodle dishes. Also try: 50 Burger, Little Red
              Hen Bakery, Little Cambodia, Boathouse Cantina and Las Camelinas
              Eat Some Pizza Everyone has an opinion as to who has the best
              pizza in town. So try both and make an informed decision. Visit
              Moonlight Pizza on a Thursday for some 2 for 1 margaritas and
              massive pies, or dip your thin crust in some home made spicy olive
              oil at Amicas. Either way, your stomach will thank you. And for
              those who want to travel off the beaten path, check out
              DePasquale’s Pizza. (just don’t tell anyone else).
            </p>
          </Column>
          <Column>
            <p>
              Drink an Adult Beverage For a small town we definitely have our
              fair share of locally crafted booze. Try Elevation, Hubbub and
              Moonlight for beer and Wood's Distillery for something a little
              harder. And for those who think beer is for the masses, Vino
              Salida is just down the road. If you want a place with the game on
              the TV, we like Benson's Tavern. Just across the street you'll
              find the infamous Victoria Bar - always fun for some shuffle board
              and you'll be sure of some great people watching. Oh, and one time
              we walked in there to a fully costumed Star Wars-themed band
              playing to a packed dance floor. When was the last time you saw a
              Millennium Falcon bass guitar?
            </p>
          </Column>
        </TripleColumn>
        <DividedHeader left="Day" right="Trips" />
        <TripleColumn>
          <Column>
            <p>
              Take a Scenic Drive Sometimes you just don't want to leave the
              comfort of your heated car seats, and for that we suggest a trip
              up Cottonwood Pass. Or if you have decent car clearance (or you
              got the extended coverage on your rental) drive to the old mining
              town of St Elmo or check out the Continental Divide up Marshall
              Pass.
            </p>
          </Column>
          <Column>
            <p>
              Explore the San Luis Valley Our neighbors to the south like to
              keep to themselves, but it's well worth the hour+ drive to explore
              the valley. Visit the Great Sand Dunes National Park, balance your
              energy in Crestone, or soak in some lithium-laden hot springs.
              This is a great part of the world if you truly want to feel small.
              Catch a Classic at a Drive-In Theater The Comanche Drive-In is an
              awesome Summer experience (open May through Fall). It's about a 30
              minute drive but totally worth the trek. Check out their site for
              times/etc.
            </p>
          </Column>
          <Column>
            <p>
              A Few Other Ideas - Check out the Royal Gorge - Hike a section of
              the Colorado Trail - Hike (or drive) up S-Mountain - Walk along
              the river in town - Catch a show at The Steamplant
            </p>
          </Column>
        </TripleColumn>
      </PaddedWrapper>
    </ExplorePageWrapper>
  </Layout>
)

export default ExplorePage
