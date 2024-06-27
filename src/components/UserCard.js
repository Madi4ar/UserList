export default function UserCard({ name, avatar, email, phone }) {
  return (
    <>
      <div class="bg-white mt-5 rounded-lg p-2.5 relative md:w-[45%] lg:w-[30%] xl:w-[24%]">
        <a
          href="http://localhost/catalog/trainer/5"
          class="absolute left-3"
          target="_blank"
          id="link"
        ></a>

        <div class="flex flex-col items-center justify-center">
          <div class="round-image w-[100px] h-[100px] rounded-[50%] overflow-hidden flex items-center justify-center">
            <img class="w-full h-full object-cover" src={avatar} alt="Photo" />
          </div>
          <p class="text-base font-bold mt-3">{`${name.firstName} ${name.lastName}`}</p>

          <div class="flex flex-col justify-center items-center mt-3 w-full">
            <div class="flex flex-col items-center w-full">
              <p class="text-[#7F7F7F] text-center">Email</p>
              <p class="font-medium">{email}</p>
            </div>

            <div class="flex flex-col items-center w-full mt-3">
              <p class="text-[#7F7F7F] text-center">Phone</p>
              <p class="font-medium">{phone}</p>
            </div>
          </div>

          <div class="flex w-full mt-3 justify-between">
            
          </div>
        </div>
      </div>
    </>
  );
}
