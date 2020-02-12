<?php

namespace App\Http\Controllers;

use App\Models\Bank;
use Illuminate\Support\Str;
use Illuminate\Http\Request;
use App\Http\Requests\BankRequest;
use App\Http\Resources\BankResource;
use Illuminate\Support\Facades\Storage;

class BankController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return view('spa');
    }

    /* 
    * List all banks
    */
    public function getBanks()
    {
        return BankResource::collection(Bank::all())
            ->response()
            ->setStatusCode(200);
    }

    /* 
    * get bank own products
    */
    public function getBankProducts($bankId)
    {
        $products = Bank::with('products')->find($bankId);
        if ($products->products->isEmpty())
            return response()->json(['success' => ''], 204);

        return (new BankResource($products))
            ->response()
            ->setStatusCode(200);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(BankRequest $request)
    {
        if ($request->has('logo'))
            $path =  $this->processImg($request->nameEn, $request->logo);

        if (!is_string($path))
            return response()->json(['errors' => ['logo' => 'Something went wrong!']], 422);

        Bank::create([
            'name_en' => $request->nameEn,
            'slug_en' => Str::slug($request->nameEn),
            'name_ar' => $request->nameAr,
            'slug_ar' => Str::slug($request->nameAr),
            'logo' => $path,
        ]);

        return response()->json(['success' => 'Bank Created'], 201);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(BankRequest $request, $id)
    {
        $bank = Bank::findOrFail($id);

        if ($request->has('logo'))
            if ($bank->logo ==  $request->logo)
                $path = $request->logo;
            else
                $path =  $this->processImg($request->nameEn, $request->logo);

        if (!is_string($path))
            return response()->json(['errors' => ['logo' => 'Something went wrong!']], 422);


        $bank->name_en = $request->nameEn;
        $bank->slug_en = Str::slug($request->nameEn);
        $bank->name_ar = $request->nameAr;
        $bank->slug_ar = Str::slug($request->nameAr);
        $bank->logo = $path;
        $bank->save();
        return response()->json(['success' => 'Bank Updated'], 200);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(Bank $bank)
    {
        $bank->delete();
        return response()->json(['success' => 'Successfully Deleted'], 204);
    }

    public function processImg($name, $img)
    {
        if ($img == null || $name == null)
            return false;

        $exploded = explode(',', $img);

        if (count($exploded) < 2)
            return false;

        $decoded = base64_decode($exploded[1]);
        $imageTypes = [
            "image/jpeg", "image/jpg", "image/png", "image/svg"
        ];
        $f = finfo_open();
        $mimeType = finfo_buffer($f, $decoded, FILEINFO_MIME_TYPE);

        if (in_array($mimeType, $imageTypes)) {
            $extension = explode('/', $mimeType)[1];
            $filename = Str::slug($name) . '-' . rand(100, 999) . '.' . $extension;
            Storage::disk('public')->put('banks/' . $filename, $decoded);
            return "banks/" . $filename;
        } else
            return false;
    }
}
