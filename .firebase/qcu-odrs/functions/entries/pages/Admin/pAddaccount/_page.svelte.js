import { c as create_ssr_component, v as validate_component } from "../../../../chunks/ssr.js";
import { P as PHeader2 } from "../../../../chunks/pHeader2.js";
import { P as Psidebar } from "../../../../chunks/psidebar.js";
import { P as PBoxesaccounts } from "../../../../chunks/pBoxesaccounts.js";
import "../../../../chunks/client.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="h-[105vh] w-full bg-slate-300">${validate_component(PHeader2, "PHeader").$$render($$result, {}, {}, {})} ${validate_component(Psidebar, "Psidebar").$$render($$result, {}, {}, {})} <div class="ml-[300px] p-5 "><h1 class="pl-0 text-[30px] text-black font-bold" data-svelte-h="svelte-zki4hy">MANAGE ACCOUNTS</h1>  <div class="flex gap-x-5">${validate_component(PBoxesaccounts, "PBoxesaccounts").$$render($$result, {}, {}, {})}  <div class="h-[70vh] w-[80%] bg-slate-100 mt-3 rounded-md shadow-md p-5" data-svelte-h="svelte-uyh5fm"><div class="w-full pl-10 "><h1 class="text-slate-900 text-[25px] font-bold ">ADD REGISTRAR ACCOUNT</h1></div>  <div class="flex w-full pl-10 pr-10 pt-5 gap-14 "><div class="w-full p-1 "><label class="form-control w-full max-w-xs "><div class="label"><span class="label-text text-black text-[15px] font-medium ">Full name:</span></div> <input type="text" placeholder="Type here" class="text-black bg-slate-300 input w-full max-w-xs shadow-sm border-[0.5px] border-[#0a0a0a2b]" required></label> <label class="form-control w-full max-w-xs pt-4 "><div class="label"><span class="label-text text-black text-[15px] font-medium">Username:</span></div> <input type="text" placeholder="Type here" class="text-black bg-slate-300 input w-full max-w-xs shadow-sm border-[0.5px] border-[#0a0a0a2b] "></label> <label class="form-control w-full max-w-xs pt-4 "><div class="label"><span class="label-text text-black text-[15px] font-medium">Position:</span></div> <input type="text" placeholder="Type here" class="text-black bg-slate-300 input w-full max-w-xs shadow-sm border-[0.5px] border-[#0a0a0a2b] "></label></div> <div class="w-full p-1"><label class="form-control w-full max-w-xs "><div class="label"><span class="label-text text-black text-[15px] font-medium ">Pasword:</span></div> <input type="password" placeholder="Type here" class="text-black bg-slate-300 input w-full max-w-xs shadow-sm border-[0.5px] border-[#0a0a0a2b]"></label> <label class="form-control w-full max-w-xs pt-4"><div class="label"><span class="label-text text-black text-[15px] font-medium ">Confirm Pasword:</span></div> <input type="password" placeholder="Type here" class="text-black bg-slate-300 input w-full max-w-xs shadow-sm border-[0.5px] border-[#0a0a0a2b]"></label></div></div> <div class="mt-2 pr-14 float-right "><button onclick="my_modal_6.showModal()" class="btn btn-active shadow-md">SUBMIT</button> <dialog id="my_modal_6" class="modal modal-bottom sm:modal-middle"><div class="modal-box"><h3 class="font-bold text-lg text-blue-700">ADD</h3> <p class="py-4">Are you sure want to ADD this account?</p> <div class="modal-action"><form method="dialog"> <button onclick="my_modal_10.showModal()" class="btn">Yes</button> <button class="btn">Close</button> <dialog id="my_modal_10" class="modal"><div class="modal-box"><h3 class="font-bold text-lg text-blue-700 ">Added</h3> <p class="py-4">Account CREATED</p></div> <form method="dialog" class="modal-backdrop"><button>close</button></form></dialog></form></div></div></dialog></div></div></div></div></div>`;
});
export {
  Page as default
};